import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL}=useLoaderData()
  
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art And Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log("Category:- ",event.target.value)
    setSelectedBookCategory(event.target.value);
  };

  // Handle Book Submission
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPdfURL=form.bookPdfURL.value;

    const updateBookObject={
      bookTitle,authorName,imageURL,category,bookDescription,bookPdfURL
    }

    // Update a book data
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updateBookObject)
    }).then(res => res.json()).then(data =>{
      alert("Book Updated Successfully");
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A Book</h2>

      <form onSubmit={handleUpdate} class="flex lg:w-[1000px] flex-col flex-wrap gap-4 mr-4">
        {/* First Row */}
        <div className="flex gap-8">
          {/* Book Name */}
          <div className="lg:w-1/2">
            <div class="mb-5">
              <label
                for="bookTitle"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Book Title
              </label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Book Name"
                required
                defaultValue={bookTitle}
              />
            </div>
          </div>

          {/* Author Name */}

          <div className="lg:w-1/2">
            <div class="mb-5">
              <label
                for="authorName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author Name
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Author Name"
                required
                defaultValue={authorName}
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Image URL */}
          <div className="lg:w-1/2">
            <div class="mb-5">
              <label
                for="imageURL"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Book Image URL
              </label>
              <input
                type="text"
                id="imageURL"
                name="imageURL"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Book Image URL"
                required
                defaultValue={imageURL}
              />
            </div>
          </div>

          {/* Category */}

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <label
                for="inputState"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Book Category
              </label>
            </div>

            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Description */}

        <div class="mb-5">
          <label
            for="bookDescription"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book Description
          </label>

          <textarea
            id="bookDescription"
            name="bookDescription"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Book Description"
            defaultValue={bookDescription}
          ></textarea>
        </div>

        {/* Book PDF Link */}

        <div class="mb-5">
          <label
            for="bookPdfURL"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Book PDF URL
          </label>
          <input
            type="text"
            id="bookPdfURL"
            name="bookPdfURL"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Book PDF URL"
            required
            defaultValue={bookPdfURL}
          />
        </div>

        {/*Submit Button */}

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBooks