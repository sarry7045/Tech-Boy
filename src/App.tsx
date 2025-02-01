import { useState, useEffect } from "react";
import { Moon, Sun, Grid, List, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(2); // Initially show 2 posts
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen size for showing toggle only on Desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const posts = [
    {
      id: 1,
      title: "What Happened To Pied Piper",
      date: "July 1, 2022",
      author: "Richard Hendricks",
      category: "SITE HISTORY",
      desc: "PiedPiper.com is down for unknown reasons, and the site's owner hasn't disclosed what happened.",
      img: "https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp",
    },
    {
      id: 2,
      title:
        "Phishers are tapping into Pied Piper and Hooli in new email scams",
      date: "July 3, 2017",
      author: "Richard Hendricks",
      category: "SCAM PHISHING",
      desc: "If imitation is the sincerest form of flattery, HBO should perhaps be blushing.",
      img: "https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp",
    },
    {
      id: 3,
      title:
        "Phishers are tapping into Pied Piper and Hooli in new email scams",
      date: "July 3, 2017",
      author: "Richard Hendricks",
      category: "SCAM PHISHING",
      desc: "If imitation is the sincerest form of flattery, HBO should perhaps be blushing.",
      img: "https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp",
    },
    {
      id: 4,
      title:
        "Phishers are tapping into Pied Piper and Hooli in new email scams",
      date: "July 3, 2017",
      author: "Richard Hendricks",
      category: "SCAM PHISHING",
      desc: "If imitation is the sincerest form of flattery, HBO should perhaps be blushing.",
      img: "https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp",
    },
    {
      id: 5,
      title:
        "Phishers are tapping into Pied Piper and Hooli in new email scams",
      date: "July 3, 2017",
      author: "Richard Hendricks",
      category: "SCAM PHISHING",
      desc: "If imitation is the sincerest form of flattery, HBO should perhaps be blushing.",
      img: "https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp",
    },
  ];

  return (
    <div>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 border-b border-gray-700 w-full md:w-[80%] mx-auto">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="bg-green-600 w-6 h-6 rounded-full inline-block"></span>{" "}
            Pied Piper
          </h1>

          <div className="flex items-center gap-6">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex gap-6">
              {/* <a href="#" className="hover:text-gray-400">
                Techies
              </a>
              <a href="#" className="hover:text-gray-400">
                Learn
              </a>
              <a href="#" className="hover:text-gray-400">
                Trends
              </a> */}
               {["Techies", "Learn", "Trends"].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative font-medium"
              whileHover={{ scale: 1.1, color: "#34D399" }}
              whileTap={{ scale: 0.9 }}
            >
              {link}
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-green-400 w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          ))}
            </nav>

            {/* Dark Mode Button */}
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </header>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-gray-900 md:hidden flex flex-col items-center gap-4 py-4"
          >
            <a href="#" className="hover:text-gray-400">
              Techies
            </a>
            <a href="#" className="hover:text-gray-400">
              Learn
            </a>
            <a href="#" className="hover:text-gray-400">
              Trends
            </a>
          </motion.div>
        )}

        {/* Hero Section */}
        <section className="p-8 w-full md:w-[80%] mx-auto">
          <h2 className="text-4xl font-bold">Welcome to Pied Piper!</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">
            This is Pied Piper's (un)official blog. Among many other things,
            Pied Piper offers a middle-out compression solution making data
            storage problems smaller. Subscribe for updates!
          </p>
        </section>

        {/* Latest Posts */}
        <section className="p-8 w-full md:w-[80%] mx-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Latest Posts</h3>
            {isDesktop && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className={`${
                    !isGridView ? " bg-green-600" : ""
                  } text-black hover:bg-green-600`}
                  onClick={() => setIsGridView(false)}
                >
                  <List className="w-5 h-5" /> List View
                </Button>
                <Button
                  variant="outline"
                  className={`${
                    isGridView ? " bg-green-600" : ""
                  } text-black hover:bg-green-600`}
                  onClick={() => setIsGridView(true)}
                >
                  <Grid className="w-5 h-5 text-black" />
                  Grid View
                </Button>
              </div>
            )}
          </div>

          <div
            className={`mt-6 grid gap-6 ${
              isDesktop && isGridView
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {posts.slice(0, visiblePosts).map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.03, boxShadow: "0px 5px 15px rgba(52, 211, 153, 0.5)" }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={post.img}
                  alt="Post Thumbnail"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-400">
                    {post.author} • {post.date}
                  </p>
                  <h4 className="text-xl font-semibold mt-2">{post.title}</h4>
                  <p className="text-green-500 text-sm mt-1">{post.category}</p>
                  <p className="text-gray-400 mt-2">{post.desc}</p>
                  <a
                    href="#"
                    className="text-green-500 mt-2 block font-medium hover:underline"
                  >
                    Read more →
                  </a>
                </CardContent>
              </motion.div>
            ))}
          </div>

          {/* View More / View Less Button */}
          <div className="flex justify-center mt-6">
            {visiblePosts < posts.length ? (
              <Button
                variant="default"
                onClick={() => setVisiblePosts(posts.length)}
              >
                View More
              </Button>
            ) : (
              <Button variant="default" onClick={() => setVisiblePosts(2)}>
                View Less
              </Button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
