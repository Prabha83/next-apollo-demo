import { NodeType } from "./Node";
import { PageInfoType } from "./PageInfo";

export interface ContactResult {
    totalCount: number;
    edges: NodeType[];
    pageInfo: PageInfoType;
}
