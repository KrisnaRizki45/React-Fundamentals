  import { useEffect, useRef, useState } from 'react';
  import { Button, Input } from "@heroui/react";
  import { li } from 'framer-motion/client';
  import { axiosInstance } from '../lib/axios';
  import { toast } from "sonner";
  import { Link } from 'react-router-dom';
  import { useSelector } from 'react-redux';

  function WishlistPage() {
    const counterSelector = useSelector((store) => store.counter);
    const messageSelector = useSelector((store) => store.message);

    const [wishlistInput, setWishListInput] = useState("");
    const [wishListItems, setWishListItems] = useState([]);

    const fetchWishListItems = async () => {
      try{
        const response = await axiosInstance.get("/wishlist-items")
  
        setWishListItems(response.data)
      } catch (error) {
        console.log(error);

        toast.error("Server error, please wait a moment!")
      }
    }

    const addWishList = async () => {
      try{
        await axiosInstance.post("/wishlist-items", {
          name: wishlistInput,
        }); 
        fetchWishListItems();
        setWishListInput("");

        toast.success("Success, you have added an item!")
      } catch (error) {
        console.log(error);

        toast.error("Server Error, please wait a moment!")
      }
    }

    // const addWishList = () => {
    //   // const wishListInputValue = inputRef.current.value;

    //   // setWishListItems([...wishListItems, wishListInputValue]);

    //   setWishListItems([...wishListItems, wishlistInput]);
    //   setWishListInput("");
    // }

    useEffect(() => {
      fetchWishListItems();
    }, [])

    return (
      <>
        {/* <Header />
        <ToDoCart day="Monday" numberOfActivities={3} list1="Push Rank" list2="Makan" list3="wleowleo"/> 
        <ToDoCart day="Tuesday" numberOfActivities={2} list1="Push Rank" list2="Makan" list3="wleowleo"/>
        <ToDoCart day="Wednesday" numberOfActivities={1} list1="Push Rank" list2="Makan" list3="wleowleo"/>
        <Counter />
        <Footer massage="Hello Anjai!"/>
        <div className=""></div> */}

        <div className='flex items-center p-4 gap-4'>
          <Input 
            type='text'
            value={wishlistInput}
            onChange={(event) => {
              const onlyLetters = event.target.value;

              // Cek apakah hanya berisi huruf (a-z dan A-Z)
              if (/^[a-zA-Z\s]*$/.test(onlyLetters)) {
                setWishListInput(onlyLetters);
              }
            }} 
            label="Wishlist Item" color="secondary"/>
          <Button onClick={addWishList} color="primary">Add</Button>
        </div>

        <p className='text-center'>{wishlistInput}</p>

        <ul className='list-decimal list-inside flex flex-col items-center justify-center'>
          {wishListItems.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>

        {/* <Link className="flex justify-start items-center h-screen w-screen" to="/auth/sign-up">Sign up</Link> */}
        <p className='text-center text-2xl font-semibold p-10'>Global count: {counterSelector.count}</p>
        <p className='text-center text-2xl font-semibold '>Global message: {messageSelector}</p>
        <Link className="" to="/auth/sign-up">Sign up now!</Link>
        <br/>
        <Link className="" to="/">Back to Home</Link>


        {/* <p className='text-center font-semibold text-2xl'>{wishListItem}</p> */}
      </>
    )
  }

  export default WishlistPage;