import Dropdown from "components/dropdown";

const Navbar = () => {
    return (
      <nav>

      
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center justify-end">
                <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
      
      
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl mx-auto p-4">

        <a href="#" class="flex items-center justify-start mx-auto p-4">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3" alt="TBH Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TBHlogo</span>
        </a>

        <div className="flex flex-wrap item-center justify-center">
          <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Dropdown></Dropdown>
            <Dropdown></Dropdown>
            <Dropdown></Dropdown>
            </ul>
          </div>
        </div>

        </div>
    </nav>
    
    </nav>

    );
  };
  
  export default Navbar;