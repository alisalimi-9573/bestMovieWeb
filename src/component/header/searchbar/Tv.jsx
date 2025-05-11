import React from "react";
import noneProfile from "../../../../public/images/defaultimg.png";
import { imgBaseUrl } from "../../../apiConfig";

export default function Tv({ item }) {
  return (
    <div className="py-2 flex items-center gap-2 m-1">
      <img
        style={{
          width: "45px",
          height: "53px",
        }}
        src={
          item.poster_path
            ? `${imgBaseUrl}/w45${item.poster_path}`
            : `${noneProfile}`
        }
        alt={item.name}
      />
      <span>{item.name}</span>
    </div>
  );
}
