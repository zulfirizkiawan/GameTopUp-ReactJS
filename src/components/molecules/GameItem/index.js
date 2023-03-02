import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GameItem(props) {
  const { title, category, thumbnail } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="./detail" passHref legacyBehavior>
        <a>
          <div className="blur-sharp">
            <Image
              className="thumbnail"
              src={`/img/${thumbnail}.png`}
              height={270}
              width={205}
              alt="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/console.svg"
                  height={36}
                  width={54}
                  alt="console"
                  className="mb-10"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
