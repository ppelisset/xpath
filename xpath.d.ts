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

export function selectWithResolver(expression: string, node: Node, resolver?: XPathNSResolver | null): SelectWithResolverReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: XPathNSResolver | null, single: false): SelectWithResolverReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: XPathNSResolver | null, single: true): SelectWithResolverSingleReturnType;

// Type guards to narrow down the type of the selected type of a returned Node object
export function isElement(value: SelectedValue): value is Element;
export function isAttribute(value: SelectedValue): value is Attr;
export function isText(value: SelectedValue): value is Text;
export function isCDATASection(value: SelectedValue): value is CDATASection;
export function isProcessingInstruction(value: SelectedValue): value is ProcessingInstruction;
export function isComment(value: SelectedValue): value is Comment;
export function isDocument(value: SelectedValue): value is Document;
export function isDocumentType(value: SelectedValue): value is DocumentType;
export function isDocumentFragment(value: SelectedValue): value is DocumentFragment;
