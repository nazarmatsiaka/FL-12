const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const treeBuider = (branch) => {
  let wrapper = document.createElement('div');

  for(let i = 0; i< branch.length; i++) {
    let item = document.createElement('div');
    let folderImage = document.createElement('i');
    let text = document.createElement('span');

    item.classList.add('item');
    folderImage.classList.add('material-icons');
    text.innerText = branch[i].title;

    wrapper.appendChild(item);
    item.appendChild(folderImage);
    item.appendChild(text);

    if(branch[i].folder) {
      let folderItems = document.createElement('div');
      folderItems.classList.add('folder_items', 'hide');
      wrapper.appendChild(folderItems);

      folderImage.innerText = 'folder';
      folderImage.classList.add('folder_image');

      item.addEventListener('click', () => {
        if(folderImage.innerText === 'folder') {
          folderImage.innerText = 'folder_open';
          folderItems.classList.remove('hide');
        } else {
          folderImage.innerText = 'folder';
          folderItems.classList.add('hide');
        }
      });

      if(branch[i].children) {
        folderItems.appendChild(treeBuider(branch[i].children));
      } else {
        let span = document.createElement('span');
        span.innerText = 'Folder is empty';
        span.classList.add('italic');
        folderItems.appendChild(span);
      }
    } else {
      folderImage.innerText = 'insert_drive_file';
      folderImage.classList.add('file_image');
    }
  }

  return wrapper;
}

rootNode.appendChild(treeBuider(structure));
