import { useState, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  title: string;
  description: string;
  author: string;
  category: string;
  mdFile: File | null;
}

const Upload = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    author: "",
    category: "",
    mdFile: null,
  });
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // toast.configure();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, mdFile: file });
    }
  };

  const handleAuthorChange = (value: string) => {
    setFormData({ ...formData, author: value });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("author", formData.author);
    data.append("category", formData.category);
    if (formData.mdFile) {
      data.append("mdFile", formData.mdFile);
    }
    try {
      const response = await axios.post(
        "https://dev.techboy.in/api/upload.php",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response);
      if (
        response.status === 200 &&
        response.data.success === "File uploaded successfully"
      ) {
        setTimeout(() => {
          toast.success(response.data.success, {
            position: "top-center",
            autoClose: 3000,
          });
          setFormData({
            title: "",
            description: "",
            author: "",
            category: "",
            mdFile: null,
          });
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
          setIsLoading(false);
        }, 2000);
      } else {
        setTimeout(() => {
          toast.error(response.data.error, {
            position: "top-center",
            autoClose: 3000,
          });
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed:", {
        position: "top-center",
        autoClose: 3000,
      });
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4"
        className={`flex justify-center items-center min-h-screen p-4 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-r from-blue-500 to-purple-600 text-gray-800"
        }`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full shadow-lg transition-all"
        >
          {darkMode ? (
            <Sun size={24} className="text-yellow-400" />
          ) : (
            <Moon size={24} className="text-white" />
          )}
        </button>

        <Card
          // className="w-full max-w-lg shadow-xl bg-white rounded-2xl p-6"
          className={`w-full max-w-lg shadow-xl rounded-2xl p-6 transition-all ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <CardHeader style={{ marginTop: "-15px", marginBottom: "10px" }}>
            <CardTitle
              // className="text-2xl font-bold text-center text-gray-800"
              className={`text-2xl font-bold text-center ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              TechBoy Blog Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  // className="border p-2 w-full"
                  className={`border p-2 w-full ${
                    darkMode ? "bg-gray-700 text-white border-gray-600" : ""
                  }`}
                />
              </motion.div>
              <motion.div
                whileFocus={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  // className="border p-2 w-full"
                  className={`border p-2 w-full ${
                    darkMode ? "bg-gray-700 text-white border-gray-600" : ""
                  }`}
                />
              </motion.div>
              <Select
                onValueChange={handleAuthorChange}
                value={formData.author}
              >
                <SelectTrigger
                  // className="w-full border p-2 rounded-lg bg-gray-100"
                  className={`w-full border p-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100"
                  }`}
                >
                  <SelectValue placeholder="Select Author" />
                </SelectTrigger>
                <SelectContent
                  className={darkMode ? "bg-gray-800 text-white" : ""}
                >
                  <SelectGroup>
                    <SelectItem value="Suraj">Suraj</SelectItem>
                    <SelectItem value="Neeraj">Neeraj</SelectItem>
                    <SelectItem value="Aditya">Aditya</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select
                onValueChange={handleCategoryChange}
                value={formData.category}
              >
                <SelectTrigger
                  // className="w-full border p-2 rounded-lg bg-gray-100"
                  className={`w-full border p-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100"
                  }`}
                >
                  <SelectValue placeholder="Select Category"/>
                </SelectTrigger>
                <SelectContent
                  className={darkMode ? "bg-gray-800 text-white" : ""}
                >
                  <SelectGroup>
                    <SelectItem value="Neeraj">Web Development</SelectItem>
                    <SelectItem value="Aditya">AI-ML</SelectItem>
                    <SelectItem value="Aditya">IOT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                <div>
                 <p>Upload Md File</p>
                </div>
                <Input
                placeholder="he"
                
                  type="file"
                  accept=".md"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  required
                  // value={formData.mdFile}
                  // className="border p-2 w-full"
                  className={`border p-2 w-full cursor-pointer ${
                    darkMode ? "bg-gray-700 text-white border-gray-600" : ""
                  }`}
                />
                  </div>
       
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                style={{ marginTop: "40px", marginBottom: "-20px" }}
              >
                <Button
                  type="submit"
                  // className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                  className={`w-full py-2 rounded-lg cursor-pointer transition-all ${
                    darkMode
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {isLoading ? "Loading..." : "Upload"}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Upload;
