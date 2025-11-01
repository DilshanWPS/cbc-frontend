import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);

  function handleRegister() {
    // Basic client-side validation
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phone || !role) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    console.log("Register button clicked");
    console.log({ firstName, lastName, email, phone, role });

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/user", {
        firstName,
        lastName,
        email,
        password,
        phone,
        role,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        toast.success("Registration successful! Please log in.");
        navigate("/login");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Registration failed:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Registration failed");
        setLoading(false);
      });
  }

  return (
    <div className="flex bg-red-900 w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center">
      <div className="w-[50%] h-full"></div>

      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-[760px] backdrop-blur-2xl shadow-xl rounded-xl flex flex-col justify-center items-center">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
            type="text"
            placeholder="First Name"
          />

          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
            type="text"
            placeholder="Last Name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
            type="email"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
            type="text"
            placeholder="Phone Number"
          />

          <select
            onChange={(e) => setRole(e.target.value)}
            value={role}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
            type="password"
            placeholder="Password"
          />

          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="w-[400px] h-[50px] border border-black rounded-xl text-center m-[5px]"
            type="password"
            placeholder="Confirm Password"
          />

          <button
            onClick={handleRegister}
            className="w-[400px] h-[50px] rounded-xl bg-green-500 text-white m-[5px] cursor-pointer"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-gray-600 text-center m-[10px]">
            Already have an account?
            &nbsp;
            <span className="text-green-500 cursor-pointer hover:text-shadow-green-950">
              <Link to={"/login"}>Login Now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
