const app = require("express")();
const stripe = require("stripe")("sk_test_aC0ZvNKyZhz1USSP7bLrYMMY00n1lEqjVN");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
    try {
        let {status} = await stripe.charges.create({
            amount: 1234,
            currency: "cad",
            description: "An example charge",
            source: req.body
        });

        res.json({status});
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});

app.listen(9000, () => console.log("Listening on port 9000"));