import bookListClasses from "./BookList.module.scss";

import Book from "../Book/Book.jsx";
import Modal from "../Modal/Modal.jsx";

import { useEffect, useState, useRef } from "react";

function BookList({
  books = [],
  booksLong = [],
  modalIsOpen,
  setModalIsOpen,
  setModalDetails,
}) {
  // const dialogElement = useRef(null);

  // useEffect(() => {
  //   // dialogElement.current.showModal();

  //   if (modalIsOpen) {
  //     dialogElement.current.showModal();
  //   } else {
  //     dialogElement.current.close();
  //   }
  // }, [modalIsOpen]);

  // const handleClick = () => {
  //   console.log(dialogElement.current);
  //   dialogElement.current.close();
  //   setModalIsOpen(false);
  // };

  return (
    <div className={bookListClasses.bookList}>
      {/* <dialog
        ref={dialogElement}
        onClick={handleClick}
        className={bookListClasses.modal}
      ></dialog> */}
      {/* <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        reference={dialogElement}
        onClick={handleClick}
        className={bookListClasses.modal}
      /> */}
      {books.map((item, index) => {
        return (
          <Book
            key={index}
            image={item["image"]}
            author={[item["author"], booksLong[index]["author"]]}
            title={[item["title"], booksLong[index]["title"]]}
            description={[item["description"], booksLong[index]["description"]]}
            modalIsOpen={modalIsOpen}
            handleModal={setModalIsOpen}
            setModalDetails={setModalDetails}
          />
        );
      })}
      {/* <Book
        key={0}
        image={
          "https://images.unsplash.com/photo-1651224762527-9560c55d9e26?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        author={"Eiichiro Oda"}
        title={"One Piece"}
        description={
          "Monkey D. Luffy and his pirate crew search the Grand Line for the ultimate treasure known as the One Piece."
        }
        modalIsOpen={modalIsOpen}
        handleModal={setModalIsOpen}
        setModalDetails={setModalDetails}
      />
      <Book
        key={1}
        image={
          "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"
        }
        author={"Hajime Isayama"}
        title={"Attack on Titan"}
        description={
          "Humanity fights for survival behind massive walls against man-eating giants called Titans."
        }
        modalIsOpen={modalIsOpen}
        handleModal={setModalIsOpen}
        setModalDetails={setModalDetails}
      />
      <Book
        key={2}
        image={
          "https://static.vecteezy.com/system/resources/thumbnails/054/876/032/small/mirror-image-snow-capped-mountain-peaks-reflected-in-pristine-lake-free-photo.jpg"
        }
        author={"Hajime Isayama"}
        title={"Attack on Titan"}
        description={
          "Humanity fights for survival behind massive walls against man-eating giants called Titans."
        }
        modalIsOpen={modalIsOpen}
        handleModal={setModalIsOpen}
        setModalDetails={setModalDetails}
      />
      <Book
        key={3}
        image={
          "https://www.mcgill.ca/web-services/files/web-services/styles/hd/public/marco-xu-toupbco62lw-unsplash_cropped.jpg?itok=vnN8-uiS&timestamp=1708957693"
        }
        author={"Hiromu Arakawa"}
        title={"Fullmetal Alchemist"}
        description={
          "Edward and Alphonse Elric are two brothers who committed alchemy's greatest taboo: human transmutation. In a desperate attempt to bring their dead mother back to life, Edward lost his left leg and Alphonse lost his entire body, his soul only surviving because Edward sacrificed his right arm to bind it to a suit of armor. Now Edward, fitted with mechanical automail limbs, has become the youngest State Alchemist in history, a certified dog of the military. Together the brothers travel across the country of Amestris searching for the fabled Philosopher's Stone, an artifact said to be capable of bypassing the fundamental law of Equivalent Exchange, hoping it can restore their bodies. But the deeper they dig, the more they uncover a conspiracy woven into the very foundation of their nation, involving immortal homunculi, a corrupt military government, and a plan centuries in the making that could consume every soul in the country."
        }
        modalIsOpen={modalIsOpen}
        handleModal={setModalIsOpen}
        setModalDetails={setModalDetails}
      />
      <Book
        key={4}
        image={
          "https://petapixel.com/assets/uploads/2024/01/The-Star-of-System-Sol-Rectangle-640x800.jpg"
        }
        author={"Tsugumi Ohba"}
        title={"Death Note"}
        description={
          "Light Yagami is a brilliant, bored high school student who resents the rot he sees in the world around him. Everything changes the day he finds the Death Note, a mysterious black notebook dropped into the human world by the shinigami Ryuk, a god of death who simply wanted entertainment. Any human whose name is written in the notebook dies. Armed with this power, Light begins a secret crusade to purge the world of criminals and reign over a new utopia as its god, taking the name Kira. As criminals die in droves from unexplained heart attacks, the international police turn to the world's greatest detective, the enigmatic and eccentric L, who quickly deduces that Kira is in Japan and can kill without being present. What follows is a breathtaking psychological chess match between two geniuses, each trying to uncover the other's identity first, where a single mistake means death, and where Light must maintain his facade as a model student while orchestrating murders on a global scale."
        }
        modalIsOpen={modalIsOpen}
        handleModal={setModalIsOpen}
        setModalDetails={setModalDetails}
      />
      <Book
        key={5}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-oqLE1eGkK3Lz6TvOy5EYZWjf1zNDEQxJph-_AxPwSU-j7AMZJqUJhes&s=10"
        }
        author={"Koyoharu Gotouge"}
        title={"Demon Slayer"}
        description={
          "Tanjiro Kamado is a kindhearted boy living in the mountains of Taisho-era Japan, selling charcoal to support his family after his father's death. One day he returns home to find his entire family slaughtered by a demon, with his younger sister Nezuko the sole survivor — except she has been transformed into a demon herself. Yet unlike other demons, Nezuko still shows signs of human emotion and refuses to harm her brother. Refusing to give up on her, Tanjiro joins the Demon Slayer Corps, a secret organization that has hunted demons for centuries, enduring brutal training to master the Water Breathing sword techniques. Carrying Nezuko in a box on his back by day and fighting alongside her by night, Tanjiro battles ever more powerful demons in search of Muzan Kibutsuji, the progenitor of all demons and the monster who destroyed his family, believing that somewhere in Muzan's blood lies the secret to turning Nezuko human again. Along the way he gains steadfast companions in the cowardly but talented Zenitsu and the boar-headed wild child Inosuke, and comes under the wing of the Hashira, the nine most powerful swordsmen of the Corps."
        }
        modalIsOpen={modalIsOpen}
        handleModal={setModalIsOpen}
        setModalDetails={setModalDetails}
      /> */}
    </div>
  );
}

export default BookList;
