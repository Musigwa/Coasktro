import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },
  get flexCenter() {
    return { flex: 1, ...this.center };
  },
  get flexRow() {
    return { flex: 1, ...this.row };
  },
  get rowBetween() {
    return { justifyContent: 'space-between', ...this.row };
  },
  separator: {
    backgroundColor: 'rgba(182, 195, 217,1)',
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
});
