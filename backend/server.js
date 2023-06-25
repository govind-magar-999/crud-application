const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App has started listening on port ${PORT}`);
});