const GOOGLE_CAPTCHA_ENDPOINT = `https://www.google.com/recaptcha/api/siteverify`;

export default async function validate(req, res) {
    if (req.method === "POST") {
        const token = req.body.token;

        console.log("Token recieved: ", token);
        // Configure payload - URL query parameter
        const params = new URLSearchParams(
            `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        );

        // Send captcha token to google to verify it
        const result = await fetch(GOOGLE_CAPTCHA_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: params,
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));

        // Valid captcha response
        if (result.success) {
            res.status(200).json(result);
        }
    }

    // Invalid captcha response, most likely a bot
    res.status(418).end();
}
