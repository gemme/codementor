exports.sortCsvColumns =  (csv_data) => {

    const rows = csv_data.split('\n');
    const unorderedNames = rows[0].split(',');
    const orderedNames = rows[0].split(',').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const ordered = [orderedNames.join(',')];

      for(let rowIndex = 1 ; rowIndex < rows.length ; rowIndex++){

        const elements = rows[rowIndex].split(',');
        const row = [];

        for(let colIndex = 0 ; colIndex < elements.length ; colIndex++){
          const i = unorderedNames.findIndex(v => v === orderedNames[colIndex]);
          row.push(elements[i]);
        }
        ordered.push(row.join(','));
      }
      return ordered.join('\n');
};