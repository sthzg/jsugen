import { toCamelCase } from '../../../utils';
import { UNDERSCORE } from '../../../constants';
import { JsonSchemaV4Types, Postfix, Prefix } from '../../../enums';
import { byIsLeaf } from '../../../selectors';

/**
 * Returns a string with a member name that is accumulated from all path nodes.
 */
export function buildName(pathNodes, options = {}) {
  const {
    includeNth = false,
    prefix = Prefix.NONE,
    postfix = Postfix.NONE,
  } = options;

  const withPostfix = (member, ...postfixes) =>
    [member, ...postfixes].join(UNDERSCORE);

  const memberNames = pathNodes.map(pathNode => {
    const { type, member } = pathNode;

    switch (type) {
      case JsonSchemaV4Types.ARRAY: {
        if (byIsLeaf(pathNode, pathNodes) && includeNth) {
          return withPostfix(member, Postfix.NTH);
        }

        if (!byIsLeaf(pathNode, pathNodes)) {
          return withPostfix(member, Postfix.NTH);
        }

        return withPostfix(member, Postfix.NONE);
      }

      default: {
        return member;
      }
    }
  });

  return toCamelCase(prefix, memberNames.join(UNDERSCORE), postfix);
}
