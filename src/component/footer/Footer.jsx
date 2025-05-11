import React from "react";

export default function Footer() {
  return (
    <footer className="text-center p-3 bg-slate-500">
      <section>
        <div className="mb-3">
          <div>
            <a
              href="#"
              className="bg-yellow-400 text-black px-3 py-1 rounded-3xl"
            >
              Get The TMDB App
            </a>
          </div>
        </div>
        <div className="mb-2 w-auto">
          <ul className="flex justify-center gap-1">
            <li className="md:mx-2">
              <a href="#">Help</a>
            </li>
            <li className="md:mx-2">
              <a href="#">Site Index</a>
            </li>
            <li className="md:mx-2">
              <a href="#">TMDBPro</a>
            </li>
            <li className="md:mx-2">
              <a href="#">Box Office Mojo</a>
            </li>
            <li className="md:mx-2">
              <a href="#">License TMDb Data</a>
            </li>
          </ul>
        </div>
        <div>created by ali salimi</div>
      </section>
    </footer>
  );
}
