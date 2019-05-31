import { toCamelCase } from '../../../utils';
import { JSON_SCHEMA_V4_TYPES_ENUM, UNDERSCORE } from '../../../constants';
import { byIsLeaf } from '../../../selectors';
import { POSTFIX, PREFIX } from '../constants';

/**
 * Returns a string with a member name that is accumulated from all path nodes.
 */
export function buildName(pathNodes, options = {}) {
  const {
    includeNth = false,
    prefix = PREFIX.NONE,
    postfix = POSTFIX.NONE,
  } = options;

  const withPostfix = (member, ...postfixes) =>
    [member, ...postfixes].join(UNDERSCORE);

  const memberNames = pathNodes.map(pathNode => {
    const { type, member, enumValues } = pathNode;

    switch (type) {
      case JSON_SCHEMA_V4_TYPES_ENUM.ARRAY: {
        if (enumValues) {
          return withPostfix(member, POSTFIX.ENUM);
        }

        if (byIsLeaf(pathNode, pathNodes) && includeNth) {
          return withPostfix(member, POSTFIX.NTH);
        }

        if (!byIsLeaf(pathNode, pathNodes)) {
          return withPostfix(member, POSTFIX.NTH);
        }

        return withPostfix(member, POSTFIX.NONE);
      }

      default: {
        return member;
      }
    }
  });

  return toCamelCase(prefix, memberNames.join(UNDERSCORE), postfix);
}
