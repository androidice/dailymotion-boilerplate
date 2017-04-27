/**
*
* VideoList
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

const columns = [
  { key: 'id',  header: 'ID', searchable: true, sortable: true, primaryKey: true },
  { key: 'title', header: 'Title', searchable: true, sortable: true },
  { key: 'channel', header: 'Channel', searchable: true, sortable: true },
  { key: 'owner', header: 'Owner', searchable: true, sortable: true }
];

function VideoList() {
  return (
    <div>

    </div>
  );
}

VideoList.propTypes = {

};

export default sematable('VideoList', VideoList, columns);
