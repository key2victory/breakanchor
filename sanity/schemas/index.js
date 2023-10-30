import blog from './documents/blog-schema';
import author from './documents/author-schema';
import project from './documents/project-schema';
import projectCategory from './documents/project-category-schema';
import imageGallery from './objects/image-gallery-schema';
import externalLink from './objects/external-link-schema';

const schema = {
  types: [imageGallery, externalLink, author, blog, project, projectCategory],
};

export default schema;
