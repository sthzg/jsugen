import merge from 'lodash-es/merge';
import byPathInDotNotation from '@sthzg/jsugen-core/lib/selectors/byPathInDotNotation';

const toTemplateVarsReducer = (result, current) =>
  merge(result, {
    template: {
      vars: {
        paths: { [current.data.pathName]: byPathInDotNotation(current) },
      },
    },
  });

export default toTemplateVarsReducer;
