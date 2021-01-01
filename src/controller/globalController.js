import Book from "../model/Book";

const homeController = (req, res) => {
    res.render("screens/home");
};

const bookController = async (req, res) => {
    const bookList = await Book.find({}, {});

    console.log(bookList);

    res.render("screens/book", { bookList });
};

const globalController = {
    homeController,
    bookController,
};

export default globalController;