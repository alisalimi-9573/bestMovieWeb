import React from "react";
import { imgBaseUrl } from "../../../apiConfig";
import noneProfile from "../../../../public/images/images.png";
import { Link } from "react-router-dom";

export default function Person({ item }) {
  return (
    <Link to={`/people/${item.id}`}>
      <div className="py-2 flex items-center gap-2 m-1">
        <img
          style={{
            width: "45px",
            height: "53px",
          }}
          src={
            item.profile_path
              ? `${imgBaseUrl}/w45${item.profile_path}`
              : `${noneProfile}`
          }
          alt={item.name}
        />
        <span>{item.name}</span>
      </div>
    </Link>
  );
}
