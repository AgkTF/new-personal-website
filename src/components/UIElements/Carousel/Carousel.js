import Image from 'next/image';

const Carousel = () => {
  return (
    <div className="p-2 mt-3 flex gap-6 scroll-smooth snap-x max-w-full overflow-x-auto">
      <div className="relative w-64 h-36 flex-shrink-0 snap-center hover:scale-110 overflow-hidden transition">
        <Image
          alt="project 1"
          src="/1.png"
          layout="fill"
          className="object-cover object-center rounded-xl shadow-md w-full h-full"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVQImWNgYZUoLC4tTIxUZmdgqCqu/////+e75zKZDBlMTU1z8wpyE5IUGPgADMQNuu/bx/YAAAAASUVORK5CYII="
        />
      </div>
      <div className="relative w-64 h-36 flex-shrink-0 snap-center hover:scale-110 overflow-hidden transition">
        <Image
          alt="project 2"
          src="/2.png"
          layout="fill"
          className="object-cover rounded-md shadow-md w-full h-full"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMklEQVQImQEnANj/ALe1voqLmbaxtODU0QCDfY4RABY/Ljbq5OIA4uHkwsXNp6mz/v//rTQXe3xE0LIAAAAASUVORK5CYII="
        />
      </div>
      <div className="relative w-64 h-36 flex-shrink-0 snap-center hover:scale-110 overflow-hidden transition">
        <Image
          alt="project 3"
          src="/3.png"
          layout="fill"
          className="object-cover rounded-md shadow-md w-full h-full"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQImQEnANj/AOTSzdfXy+Tl1v///QDk5OSjm4dsWEl8goQAeHh0eHNwSkZIAAIDA6cVMy5gNfMAAAAASUVORK5CYII="
        />
      </div>
      <div className="relative w-64 h-36 flex-shrink-0 snap-center hover:scale-110 overflow-hidden transition">
        <Image
          alt="project 4"
          src="/4.png"
          layout="fill"
          className="object-cover rounded-md shadow-md w-full h-full"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQImQEnANj/AAoOGKessnqOlkVibgAAAA7///+FlJUTIigAHyMny87RkZOWYGFmIhcPs1pokPUAAAAASUVORK5CYII="
        />
      </div>
      <div className="relative w-64 h-36 flex-shrink-0 snap-center hover:scale-110 overflow-hidden transition">
        <Image
          alt="project 5"
          src="/1.png"
          layout="fill"
          className="object-cover rounded-md shadow-md w-full h-full"
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVQImWNgYZUoLC4tTIxUZmdgqCqu/////+e75zKZDBlMTU1z8wpyE5IUGPgADMQNuu/bx/YAAAAASUVORK5CYII="
        />
      </div>
    </div>
  );
};

export default Carousel;
