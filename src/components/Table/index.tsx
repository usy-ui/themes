import { ReactNode } from "react";

import clsx from "clsx";

import { CommonCompProps } from "../../@types/common-comp.props";

type FallbackRow = Record<string, any>;

export type TableColumnType<R extends FallbackRow> = {
  key: Extract<keyof R | "action", string>;
  title?: string;
  renderRow?: (row: R) => ReactNode;
};

type TableProps<R extends FallbackRow> = {
  columns: TableColumnType<R>[];
  dataRows: R[];
  rowKey: Extract<keyof R, string>;
} & CommonCompProps;

export const Table = <R extends FallbackRow>({
  name = "table",
  columns,
  dataRows,
  rowKey,
  className,
  testId = name,
}: TableProps<R>) => {
  const renderHead = () => {
    return (
      <thead className="head" data-testid={`${testId}-head`}>
        <tr className="head-row" data-testid={`${testId}-head-row`}>
          {columns.map((col) => (
            <th key={col.key} className="head-column">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody className="body" data-testid={`${testId}-body`}>
        {dataRows.map((row) => (
          <tr
            key={row[rowKey]}
            className="body-row"
            data-testid={`${testId}-body-row`}
          >
            {columns.map((col) => (
              <td key={col.key} className="body-column">
                {col.renderRow ? col.renderRow(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div
      className={clsx("usy-table-container", className)}
      data-testid={testId}
    >
      <table className="table">
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
};
