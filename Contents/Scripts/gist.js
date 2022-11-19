class Gist {
  constructor(name, description) {
    this.name = name;
    this.description = 'Untitled';
    if (description) {
      this.description = description;
    }}

  get url() {
    return 'https://gist.github.com/' + this.name;
  }

  toMenuItem() {
    return {
      title: this.description,
      subtitle: this.name,
      alwaysShowsSubtitle: true,
      url: this.url,
      icon: 'gistTemplate.png',
    };
  }
}

if (typeof module !== 'undefined') { module.exports.Gist = Gist; }
