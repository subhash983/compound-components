import TabSwitcher, { Tab, TabPanel } from "../components/tab-switcher";

function App() {
  return (
    <>
      <header className="bg-green-400 flex items-center justify-center p-2 font-sans font-bold text-2xl">
        TabSwitcher with Compound Components
      </header>
      <div className="App flex flex-col  gap-2 p-2 text-xl">
        <TabSwitcher>
          <div className="flex gap-x-6 justify-center bg-slate-500 text-white">
            <Tab id="a" className="p-2 focus:ring-2 ">
              <button className="px-4 focus:bg-orange-300 focus:text-stone-500">Tab 1</button>
            </Tab>
            <Tab id="b" className="p-2 focus:ring-2 ">
              <button className="px-4 focus:bg-orange-300 focus:text-stone-500">Tab 2</button>
            </Tab>
          </div>

          <div className="min-w-full min-h-[400px] flex items-center justify-center bg-yellow-100 text-4xl font-extrabold font-serif">
            <TabPanel whenActive="a">
              <div>A PANEL</div>
            </TabPanel>

            <TabPanel whenActive="b">
              <div>B PANEL</div>
            </TabPanel>
          </div>
        </TabSwitcher>
      </div>
    </>
  );
}
export default App;
