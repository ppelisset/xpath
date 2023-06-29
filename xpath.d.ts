/// <reference lib="dom" />

export type SelectedValue = Node | string | number | boolean | null;

export interface XPathSelect {
    (expression: string, node: Node): Array<Node>;
    (expressed: string, node: Node, single: false): Array<Node>;
    (expression: string, node: Node, single: true): SelectedValue;
}

export type SelectWithResolverReturnType = Array<Node> | SelectedValue;
export type SelectWithResolverSingleReturnType = SelectedValue;

export function select(expression: string, node: Node): SelectWithResolverReturnType;
export function select(expression: string, node: Node, single: false): SelectWithResolverReturnType;
export function select(expression: string, node: Node, single: true): SelectWithResolverSingleReturnType;

export function select1(expression: string, node: Node): SelectWithResolverSingleReturnType;

export function useNamespaces(namespaceMap: Record<string, string>): XPathSelect;

export function selectWithResolver(expression: string, node: Node, resolver: XPathNSResolver): SelectWithResolverReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: XPathNSResolver, single: false): SelectWithResolverReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: XPathNSResolver, single: true): SelectWithResolverSingleReturnType;

// Type guards to narrow down the type of the selected type of a returned Node object
export function isElement(value: SelectedValue): value is Element {
    return value instanceof Node && value.nodeType === Node.ELEMENT_NODE;
}

export function isAttribute(value: SelectedValue): value is Attr {
    return value instanceof Node && value.nodeType === Node.ATTRIBUTE_NODE;
}

export function isText(value: SelectedValue): value is Text {
    return value instanceof Node && value.nodeType === Node.TEXT_NODE;
}

export function isCDATASection(value: SelectedValue): value is CDATASection {
    return value instanceof Node && value.nodeType === Node.CDATA_SECTION_NODE;
}

export function isEntityReference(value: SelectedValue): value is EntityReference {
    return value instanceof Node && value.nodeType === Node.ENTITY_REFERENCE_NODE;
}

export function isEntity(value: SelectedValue): value is Entity {
    return value instanceof Node && value.nodeType === Node.ENTITY_NODE;
}

export function isProcessingInstruction(value: SelectedValue): value is ProcessingInstruction {
    return value instanceof Node && value.nodeType === Node.PROCESSING_INSTRUCTION_NODE;
}

export function isComment(value: SelectedValue): value is Comment {
    return value instanceof Node && value.nodeType === Node.COMMENT_NODE;
}

export function isDocument(value: SelectedValue): value is Document {
    return value instanceof Node && value.nodeType === Node.DOCUMENT_NODE;
}

export function isDocumentType(value: SelectedValue): value is DocumentType {
    return value instanceof Node && value.nodeType === Node.DOCUMENT_TYPE_NODE;
}

export function isDocumentFragment(value: SelectedValue): value is DocumentFragment {
    return value instanceof Node && value.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}

export function isNotation(value: SelectedValue): value is Notation {
    return value instanceof Node && value.nodeType === Node.NOTATION_NODE;
}
