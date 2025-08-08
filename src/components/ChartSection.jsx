import spendingData from "../assets/data.json";

const total = spendingData.reduce((first, next) => first + next.amount, 0);

export function ChartSection() {
  return (
    <section className="bg-white p-4 rounded-xl w-sm md:w-lg">
      <h2 className="text-2xl font-semibold text-Brown-950 mb-12">
        Spending - Last 7 days
      </h2>
      <div className="flex flex-row justify-around items-end">
        {spendingData.map((dayData) => {
          return (
            <>
              <div className="flex flex-col items-center">
                <span className="bg-Brown-950 text-white mb-2 invisibl hover:bg-Red-500 p-1 rounded-sm font-semibold">
                  ${dayData.amount}
                </span>
                <div
                  //   onMouseOver={} use state to manage this
                  className={`basis-${dayData.amount} bg-Red-500  w-8 rounded-sm `}
                ></div>
                <p className="font-semibold text-Brown-400">{dayData.day}</p>
              </div>
            </>
          );
        })}
      </div>
      <hr className="text-Brown-400 my-6" />
      <footer className="flex flex-row justify-between items-baseline-last">
        <div>
          <p className="text-Brown-400 font-medium">Total this month</p>
          <h3 className="text-4xl font-semibold text-Brown-950">${total}</h3>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-base font-bold text-Brown-950">+4.4%</p>
          <p className="-mt-2 text-sm font-medium text-Brown-400">
            from last month
          </p>
        </div>
      </footer>
    </section>
  );
}
