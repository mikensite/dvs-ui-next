import config from '../config.js';

export default  {
    data: () => {
        return {
            appConfig: config.app,
        }
    },
  methods: {
    decodeHtml(html: string) {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }
};
