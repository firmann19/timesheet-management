import React from "react";
import { Table } from "react-bootstrap";
import Pagination from "../Pagination";
import Tbody from "../TbodyWithAction";
import Thead from "../Thead";

function TableWithAction({
  withoutPagination,
  handlePageClick,
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  confirmationUrl,
  Detail,
  status,
  pages,
}) {
  return (
    <>
      <Table striped bordered variant="light" hover>
        <Thead text={thead} />
        <Tbody
          status={status}
          data={data}
          display={tbody}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
          confirmationUrl={confirmationUrl}
          Detail={Detail}
        />
      </Table>
      {!withoutPagination && data.length ? (
        <Pagination pages={pages} handlePageClick={handlePageClick} />
      ) : (
        ""
      )}
    </>
  );
}

export default TableWithAction;
