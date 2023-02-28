export default function PatchMeta(Component, metaPatch) {
  return class extends Component {
    static meta = metaPatch;
  }
}

