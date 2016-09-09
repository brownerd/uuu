'use babel';

// I don't think I need this anymore

export default function (sassvars) {
  return sassvars.split(";\n")
    .filter(item => item)
    .map(item => item.split(":")
      .map(i => i)
    ).reduce((previous, current) => {
      return previous.concat(current[1].trim())
    }, []);
}
