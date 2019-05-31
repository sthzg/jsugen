import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import RefParser from 'json-schema-ref-parser';
import { schemaWalk, vocabularies } from '@cloudflare/json-schema-walker';

/**
 * Returns an observable that emits all nodes from a JSON schema.
 */
export function fromJsonSchemaWalker(schema) {
  const dereferencedSchemaPromise = RefParser.dereference(schema);

  const walk = dereferencedSchema =>
    new Observable(subscriber => {
      try {
        schemaWalk(
          dereferencedSchema,
          null,
          (subschema, path, parent, pathToParent) => {
            subscriber.next({
              schema: subschema,
              path,
              parent,
              pathToParent,
              fullPath: [].concat(pathToParent, path),
            });
          },
          vocabularies.DRAFT_04,
        );
      } catch (error) {
        subscriber.error(error);
      }
      subscriber.complete();
    });

  return from(dereferencedSchemaPromise).pipe(mergeMap(walk));
}
