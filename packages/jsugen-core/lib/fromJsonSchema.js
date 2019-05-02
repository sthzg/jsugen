import { Observable } from 'rxjs';
import { schemaWalk, vocabularies } from '@cloudflare/json-schema-walker';

const fromJsonSchema = schema =>
  new Observable(subscriber => {
    try {
      schemaWalk(
        schema,
        null,
        (subschema, path, parent, pathToParent) => {
          subscriber.next({
            schema: subschema,
            path,
            parent,
            pathToParent,
          });
        },
        vocabularies.DRAFT_04,
      );
    } catch (error) {
      subscriber.error(error);
    }
    subscriber.complete();
  });

export default fromJsonSchema;
