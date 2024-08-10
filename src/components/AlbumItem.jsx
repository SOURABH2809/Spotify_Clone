import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => navigate(`/album/${id}`)}
        className="min-w-[180px] p-5 px-5 rounded cursor-pointer hover:bg-[#ffffff26]"
      >
        <img className="rounded" src={image} alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default AlbumItem;
