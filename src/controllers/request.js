import models from '../database/models';

const {Book,User, Borrowedbooks} =models;


export default class BorrowBooks {

  static async borrowBooks (req,res){
    // const {Book_id}=req.params
    try{
			// const {Book_id}=req.params;
    return Book.findOne({ where: {id:req.params.id} })
		.then((borrowedBook) => {
			if (!borrowedBook ) {
        // || borrowedBook.status === 'borrowed')
				return res.status(404).send({ message: 'Book not found' });
			}
			if (borrowedBook) {
				borrowedBook.update({
					status: 'borrowed',
				});
				Borrowedbooks.create({
					Book_id: borrowedBook.Book_id,
					email: 'theoneste99@gmail.com',
					Date_to_returnBook: '1/1/1991',
				})
					.then(async (info) => {
						return res.status(200).send({ info, message: 'The book is borrowed' });
					})
					.catch((error) => console.log(error));
			}
		})
		.catch((error) => console.log(error));
  } catch (err) {
    next(err);
  }
}

static async returnBorrowedBook(req,res){
	try{
		return Borrowedbooks.findOne({where:{id:req.params.id}})
		.then((book)=>{
			if(book){
				// Book.findOne({where:{id:req.params.id}})
				// .then((returnedBook)=>{
				// 	return returnedBook.update({
				// 		status: 'available',
				// 	});
				// })
				Borrowedbooks.destroy({where:{id:req.params.id}})
			}
			// if(!book){
			// 		return res.status(404).send({ message: 'Book not found' });
			// }


		})
	}catch(err){
		console.log(err);
	}
}


  static async findBorrowedBooks(req,res){
    try {
		return Borrowedbooks.findAll().then((data) => res.status(201).send({ data, message: 'all books' }));
	} catch (err) {
		next(err);
	}
    }
    
  }