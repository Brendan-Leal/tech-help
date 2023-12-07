const HS_APP_URL =
  "https://api.hsforms.com/submissions/v3/integration/secure/submit/44428219/185bc1da-e25f-4b49-ab3b-de190811f936";
const HS_V2_API_ENDPOINT =
  "https://api.hubapi.com/forms/v2/forms/185bc1da-e25f-4b49-ab3b-de190811f936";

export default async function submit(req, res) {
  const fieldValues = await getHubSpotFormFields();

  addFormData(fieldValues, req.body);

  const hsRes = await fetch(HS_APP_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: fieldValues }),
  }).catch((err) => console.error(err));

  if (hsRes.ok) {
    res.status(200).end();
  } else {
    res.status(500).end();
    throw new Error("Could not complete form submission to HubSpot");
  }
}

async function getHubSpotFormFields() {
  return await fetch(HS_V2_API_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((hubspotForm) => parseFieldGroups(hubspotForm))
    .catch((err) => {
      console.err("Could not get Hubspot form", err);
    });
}

function parseFieldGroups(hubspotForm) {
  const fieldGroups = hubspotForm.formFieldGroups;

  // Extract the necessary field values from the form
  const fieldValues = fieldGroups.map((group) => {
    const fields = group.fields[0];
    const fieldValues = {};

    for (const [key, value] of Object.entries(fields)) {
      if (key === "name" || key === "objectTypeId") {
        fieldValues[key] = value;
      }
    }
    return fieldValues;
  });

  return fieldValues;
}

function addFormData(fieldValues, formData) {
  return fieldValues.map((data) => {
    data.value = formData[data.name];
    return data;
  });
}
