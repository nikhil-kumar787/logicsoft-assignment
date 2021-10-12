const express = require("express");
const cors = require("cors");
const axios = require("axios");
const asyncHandler = require("express-async-handler");
const { parse, stringify } = require("flatted");

const app = express();

app.use(express.json());
app.use(cors());

app.get(
  "/api/book-search/:id",
  asyncHandler(async (req, res) => {
    const id = await axios.get(
      `https://lspl-info4you.glitch.me/search?isbn=${req.params.id}`
    );

    if (id.data.ID != null) {
      const book = await axios.get(
        `https://lspl-info4you.glitch.me/info/${id.data.ID}`
      );
      const str = stringify(book);
      const books = JSON.parse(str);
      const data = books[5];
      res.status(200).json({
        success: true,
        data,
      });
      res.send(book);
    } else {
      res.status(404).json({
        success: false,
        message: "Not found any book with given ISBN",
      });
    }

    //   console.log(id.data.ID);
  })
);

app.listen(3001, () => {
  console.log("Server is up and running at the port 3001");
});
