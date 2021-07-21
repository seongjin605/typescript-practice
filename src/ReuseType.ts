interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// interface TopNavState {
//   userId: string;
//   pageTitle: string;
//   recentFiles: string[];
// }

// type TopNavState = {
//   userId: State['userId'];
//   pageTitle: State['pageTitle'];
//   recentFiles: State['recentFiles'];
// };

type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
};
