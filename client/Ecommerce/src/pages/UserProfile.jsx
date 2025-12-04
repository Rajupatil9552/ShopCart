import React, { useEffect, useState } from "react";
import { getUserProfile } from "../api/getUserProfile.js";
import Navbar from "../components/Navbar";
import ProfileAvatar from "../assets/profileAvatar.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div>
     

      <section className="max-w-4xl mx-auto px-6 py-16">
        {userProfile && (
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 space-y-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4">
              <img
                src={ProfileAvatar}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-primary"
              />
              <h1 className="text-3xl font-bold text-text">
                {userProfile.data.userName}
              </h1>
              <p className="text-gray-600 text-lg">{userProfile.data.email}</p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Section buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition">
                Edit Profile
              </button>

              <Link
                to="/order-history"
                className="bg-cta hover:bg-[#e00062] text-white px-6 py-3 rounded-md font-medium text-lg transition"
              >
                Order History
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default UserProfile;
