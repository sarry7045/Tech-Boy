import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
            <nav className="hidden md:flex gap-6">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Projects
              </a>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </nav>
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="p-8 w-full md:w-[80%] mx-auto">
          <h2 className="text-4xl font-bold">Welcome to Pied Piper!</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">
            This is Pied Piper's (un)official blog. Among many other things,
            Pied Piper offers a middle-out compression solution making data
            storage problems smaller. To get updates, check this site often or
            subscribe to our RSS feed.
          </p>
        </section>

        {/* Latest Posts */}
        <section className="p-8 w-full md:w-[80%] mx-auto">
          <h3 className="text-2xl font-bold">Latest Posts</h3>
          <div className="mt-4 space-y-6">
            {/* Post 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp"
                alt="Post Thumbnail"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <p className="text-sm text-gray-400">
                  Richard Hendricks • July 1, 2022
                </p>
                <h4 className="text-xl font-semibold mt-2">
                  What Happened To Pied Piper
                </h4>
                <p className="text-green-500 text-sm mt-1">SITE HISTORY</p>
                <p className="text-gray-400 mt-2">
                  PiedPiper.com is down for unknown reasons, and the site's
                  owner hasn't disclosed what happened.
                </p>
                <a
                  href="#"
                  className="text-green-500 mt-2 block font-medium hover:underline"
                >
                  Read more →
                </a>
              </CardContent>
            </motion.div>

            {/* Post 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://iotvnaw69daj.i.optimole.com/cb:Amyz.6583c/w:auto/h:auto/q:75/f:best/https://www.bloggingpro.com/wp-content/uploads/2023/10/Best-Tech-Blogs-featured-image.webp"
                alt="Post Thumbnail"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <p className="text-sm text-gray-400">
                  Richard Hendricks • July 3, 2017
                </p>
                <h4 className="text-xl font-semibold mt-2">
                  Phishers are tapping into Pied Piper and Hooli in new email
                  scams
                </h4>
                <p className="text-green-500 text-sm mt-1">SCAM PHISHING</p>
                <p className="text-gray-400 mt-2">
                  If imitation is the sincerest form of flattery, HBO should
                  perhaps be blushing.
                </p>
                <a
                  href="#"
                  className="text-green-500 mt-2 block font-medium hover:underline"
                >
                  Read more →
                </a>
              </CardContent>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
