import blog from './documents/blog-schema';
import author from './documents/author-schema';
import project from './documents/project-schema';
import projectCategory from './documents/project-category-schema';
import imageGallery from './objects/image-gallery-schema';
import externalLink from './objects/external-link-schema';
import embed from './objects/embed-schema';

const schema = {
  types: [imageGallery, externalLink, embed, author, blog, project, projectCategory],
};

export default schema;
