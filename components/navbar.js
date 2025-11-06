class CustomNavbar extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <nav class="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-soft">
        <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" class="font-extrabold text-lg tracking-tight">My Portfolio</a>
          <div class="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" class="hover:underline">About</a>
            <a href="#experience" class="hover:underline">Experience</a>
            <a href="#projects" class="hover:underline">Projects</a>
            <a href="#skills" class="hover:underline">Skills</a>
            <a href="#contact" class="hover:underline">Contact</a>
          </div>
          <div class="flex items-center gap-2">
            <button id="theme-toggle" aria-label="Toggle theme"
              class="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-white/60 dark:hover:bg-slate-800">
              <i id="theme-icon" data-feather="moon"></i>
            </button>
            <button id="menu-btn" class="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
        <div id="mobile" class="hidden md:hidden px-6 pb-4">
          <a href="#about" class="block py-2">About</a>
          <a href="#experience" class="block py-2">Experience</a>
          <a href="#projects" class="block py-2">Projects</a>
          <a href="#skills" class="block py-2">Skills</a>
          <a href="#contact" class="block py-2">Contact</a>
        </div>
      </nav>
    `;
    feather.replace();

    // theme init/persist
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(saved === 'dark' || (!saved && prefersDark)){
      document.documentElement.classList.add('dark');
    }
    this.updateIcon();

    // listeners
    this.querySelector('#theme-toggle').addEventListener('click', ()=>{
      const root = document.documentElement;
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      this.updateIcon();
    });

    this.querySelector('#menu-btn').addEventListener('click', ()=>{
      this.querySelector('#mobile').classList.toggle('hidden');
    });
  }

  updateIcon(){
    const icon = this.querySelector('#theme-icon');
    const isDark = document.documentElement.classList.contains('dark');
    icon.setAttribute('data-feather', isDark ? 'sun' : 'moon');
    feather.replace();
  }
}
customElements.define('custom-navbar', CustomNavbar);
