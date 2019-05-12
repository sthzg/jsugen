import { from, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import RefParser from 'json-schema-ref-parser';
import { schemaWalk, vocabularies } from '@cloudflare/json-schema-walker';

const fromJsonSchemaWalker = schema =>
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

/**
 * Returns an observable that emits all nodes from a JSON schema.
 */
const fromJsonSchema = schema => {
  const dereferencedSchemaPromise = RefParser.dereference(schema);

  return from(dereferencedSchemaPromise).pipe(flatMap(fromJsonSchemaWalker));
};

export default fromJsonSchema;
