class CustomFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
      <footer class="mt-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-6xl mx-auto px-6 py-8 text-center">
          <div class="flex justify-center gap-5 mb-4">
            <a href="https://github.com/ShreejaMandaloju" target="_blank" class="hover:text-primary"><i data-feather="github"></i></a>
            <a href="https://www.linkedin.com/in/shreeja-mandaloju-40593425b/" target="_blank" class="hover:text-primary"><i data-feather="linkedin"></i></a>
            <a href="mailto:shreejamandaloju@gmail.com" class="hover:text-primary"><i data-feather="mail"></i></a>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400">&copy; 2025 Shreeja Mandaloju. All rights reserved.</p>
          <a href="https://github.com/ShreejaMandaloju" target="_blank"
             class="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full bg-primary text-white shadow-soft hover:shadow-cardHover">
            More Projects <i data-feather="external-link" class="w-4 h-4"></i>
          </a>
        </div>
      </footer>
    `;
    feather.replace();
  }
}
customElements.define('custom-footer', CustomFooter);
