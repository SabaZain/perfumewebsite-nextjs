import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <div>
        <Header/>
        <h1 className="text-3xl text-center font-bold font-serif text-blue-950 pt-8 m-4">Contact Us</h1>
        <p className="text-xl font-semibold text-center m-8">For any queries/information feel free to contact us at Smartperfumes@gmail.com</p>
        <form className=" block justify-center align items-center gap-3 ">
          <div className="text-md p-4 m-1 h-12">
        <label >
        <input type="text" name="Name" placeholder="Your Name" required/>
        </label></div>
        <div className="text-md p-4 m-1 h-12 ">
          <label>
        <input type="email" name="email" placeholder="Your Email" required/>
        </label></div>
        <div className="text-md p-4 m-1 h-12">
          <label>
        <textarea name="Your Name" placeholder="Your Message" required></textarea>
        </label></div>
        
        <button type="submit" className="bg-black text-white flex justify-around p-2 m-10">Submit</button>
        </form>
    </div>
  );
};

export default ContactPage