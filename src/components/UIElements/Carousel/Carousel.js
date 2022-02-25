import Image from 'next/image';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const Carousel = () => {
  return (
    <ScrollArea.Root type="hover">
      <ScrollArea.Viewport className="scroll-smooth snap-x">
        <div className="p-2 pb-6 mt-3 flex gap-6">
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
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="p-[2px] flex flex-col h-[10px] select-none touch-none dark:bg-slate-50/25 bg-slate-600/25 rounded-full transition-colors ease-out"
      >
        <ScrollArea.Thumb className="radix__thumb relative flex-1 bg-tertiary-light rounded-full" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default Carousel;
