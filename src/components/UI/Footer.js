const Footer = () => {
  return (
    <div className="text-center py-8 flex flex-col gap-2 bg-orange-400 text-white">
      <p>
        Wanna talk to me? Lets connect on my{" "}
        <a
          className="underline hover:bg-blue-500 transition-colors p-1"
          href="https://www.linkedin.com/in/ihsanul-fikri-abiyyu-94479a141/"
        >
          Linkedin
        </a>
      </p>
      <p>&copy;Ihsanul Fikri Abiyyu Personal Project</p>
    </div>
  );
};

export default Footer;
