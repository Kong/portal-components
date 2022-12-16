export interface BaseNode<Type extends string = string> {
  type: Type
  children?: Array<BaseNode>
}

export interface Document extends BaseNode<'document'> {
  children: Array<BaseNode>
  version: number
}

export enum TableRowSection {
  header = 'header',
  body = 'body',
  footer = 'footer'
}

export interface TableRowNode extends BaseNode<'table_row'> {
  section?: TableRowSection
  children: Array<TableCellNode>
}

export interface TableCellNode extends BaseNode<'table_cell'> {
  align?: TableCellAlign
}

export enum TableCellAlign {
  left = 'left',
  center = 'center',
  right = 'right'
}

export interface TextNode extends BaseNode<'text'> {
  text: string
  children: undefined
  hard_break?: boolean
}

export interface HeadingNode extends BaseNode<'heading'> {
  level: number
}

export interface ListNode extends BaseNode<'list'> {
  is_ordered?: boolean
  children: Array<ListItemNode>
}

export interface ListItemNode extends BaseNode<'list_item'> {}

export interface LinkNode extends BaseNode<'link'> {
  href: string
}
