import Blockly from 'blockly';
import 'blockly/javascript';

const BlocklyR = require('./blockly_compressed')

const categorical_vars = [["substance","substance"],["anysub","anysub"], ["sex","sex"],["homeless","homeless"],["link","link"],["racegrp","racegrp"],["satreat","satreat"],["treat","treat"]]
const categorical_vars_alt = [["sex","sex"],["substance","substance"],["anysub","anysub"],["homeless","homeless"],["link","link"],["racegrp","racegrp"],["satreat","satreat"],["treat","treat"]]
const categorical_vars_alt_anysubfirst = [["anysub","anysub"],["sex","sex"],["substance","substance"],["homeless","homeless"],["link","link"],["racegrp","racegrp"],["satreat","satreat"],["treat","treat"]]
const categorical_vars_alt_homelessfirst = [["homeless","homeless"],["anysub","anysub"],["sex","sex"],["substance","substance"],["link","link"],["racegrp","racegrp"],["satreat","satreat"],["treat","treat"]]
const quantitative_vars = [["cesd","cesd"],["mcs","mcs"], ["pcs","pcs"],["age","age"],["d1","d1"],["pcs_fr","pcs_fr"],["hospitalizations","hospitalizations"],["sexrisk","sexrisk"],["daysanysub","daysanysub"],["dayslink","dayslink"],["drugrisk","drugrisk"],["e2b","e2b"],["i1","i1"],["i2","i2"],["indtotal","indtotal"]]
const quantitative_vars_alt = [["mcs","mcs"],["cesd","cesd"], ["pcs","pcs"],["age","age"],["d1","d1"],["pcs_fr","pcs_fr"],["hospitalizations","hospitalizations"],["sexrisk","sexrisk"],["daysanysub","daysanysub"],["dayslink","dayslink"],["drugrisk","drugrisk"],["e2b","e2b"],["i1","i1"],["i2","i2"],["indtotal","indtotal"]]


/* Link for Generating Code: https://developers.google.com/blockly/guides/create-custom-blocks/generating-code */
Blockly.RBlocks = new Blockly.Generator('RBlocks');


/* gf bar delete fill */
/* add gf_percents(~substance, data = HELPrct, fill = ~sex, position= "fill") also position doges as option */




/*************************************************
 *     GENERAL FUNCTIONALITY (using HELPrct)     *
 ************************************************/

/**** Library (lib) Function *****/
Blockly.Blocks['lib'] = {
  init: function() {
    this.appendDummyInput("library")
        .appendField("library(")
        .appendField(new Blockly.FieldDropdown([["mosaic","mosaic"], ["mosaicData","mosaicData"], ["Stat2Data","Stat2Data"]]), "library_name")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to load the library");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['lib'] = function(block) {
  var dropdown_library_name = block.getFieldValue('library_name');
  var code = 'library(' + dropdown_library_name + ')\n';
  return code;
};
/************ ************************/

/**** Names Function *****/
Blockly.Blocks['names'] = {
  init: function() {
    this.appendDummyInput("names")
        .appendField("names(")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"],["mosaicData","mosaicData"],["Stat2Data","Stat2Data"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to print the names");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['names'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'names(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** glimpse Function *****/
Blockly.Blocks['glimpse'] = {
  init: function() {
    this.appendDummyInput("glimpse")
        .appendField("glimpse(")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"],["mosaicData","mosaicData"],["Stat2Data","Stat2Data"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to take a glimpse of library");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['glimpse'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'glimpse(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** head Function *****/
Blockly.Blocks['head'] = {
  init: function() {
    this.appendDummyInput("head")
        .appendField("head(")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"],["mosaicData","mosaicData"],["Stat2Data","Stat2Data"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to see the header of a data");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['head'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'head(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** tail Function *****/
Blockly.Blocks['tail'] = {
  init: function() {
    this.appendDummyInput("tail")
        .appendField("tail(")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"],["mosaicData","mosaicData"],["Stat2Data","Stat2Data"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to see the tail of the library");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['tail'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tail(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** help Function *****/
Blockly.Blocks['help'] = {
  init: function() {
    this.appendDummyInput("help")
        .appendField("help(")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"],["mosaicData","mosaicData"],["Stat2Data","Stat2Data"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to access help from R");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['help'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'help(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/*************************************************
 *           GENERAL FUNCTIONALITY               *
 ************************************************/

/**** Library (Glib) Function *****/
Blockly.Blocks['Glib'] = {
  init: function() {
    this.appendDummyInput("")
        .appendField("library(")
        .appendField(new Blockly.FieldTextInput(""), "library_name")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to load the library");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['Glib'] = function(block) {
  var dropdown_library_name = block.getFieldValue('library_name');
  var code = 'library(' + dropdown_library_name + ')\n';
  return code;
};
/************ ************************/

/**** Names Function *****/
Blockly.Blocks['Gnames'] = {
  init: function() {
    this.appendDummyInput("names")
        .appendField("names(")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to print the names");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['Gnames'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'names(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** glimpse Function *****/
Blockly.Blocks['Gglimpse'] = {
  init: function() {
    this.appendDummyInput("glimpse")
        .appendField("glimpse(")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to take a glimpse of library");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['Gglimpse'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'glimpse(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** head Function *****/
Blockly.Blocks['Ghead'] = {
  init: function() {
    this.appendDummyInput("head")
        .appendField("head(")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to see the header of a data");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['Ghead'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'head(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** tail Function *****/
Blockly.Blocks['Gtail'] = {
  init: function() {
    this.appendDummyInput("tail")
        .appendField("tail(")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to see the tail of the library");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['Gtail'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tail(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/**** help Function *****/
Blockly.Blocks['Ghelp'] = {
  init: function() {
    this.appendDummyInput("help")
        .appendField("help(")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("This is used to access help from R");
 this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
  }
};

Blockly.JavaScript['Ghelp'] = function(block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'help(' + dropdown_data_name + ')\n';
  return code;
};
/************ ************************/

/*************************************************
 *    STATISTICAL ANALYSIS (using HELPrct)       *
 ************************************************/

/*************** define tallydata ********************/

Blockly.Blocks['tallydata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Choose a categorical variable and a dataset to get a contingence table");
   this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
    }
  };

Blockly.JavaScript['tallydata'] = function(block) {
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'tally(~' + dropdown_categorical_var_name + ', data =' + dropdown_data_name + ')\n';
    return code;
  };

/*************************************************/

/********** define tallydataformat ***************/
Blockly.Blocks['tallydataformat'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(", format =")
          .appendField(new Blockly.FieldDropdown([["\"proportion\"","\"proportion\""],["\"percent\"","\"percent\""],["count", "count"]]), "format")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Choose a categorical variable, a dataset and a format  to get a contingence table");
   this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
    }
  };

  Blockly.JavaScript['tallydataformat'] = function(block) {
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var dropdown_format_name = block.getFieldValue('format');
    var code = 'tally(~' + dropdown_categorical_var_name + ', data =' + dropdown_data_name + ', format = ' + dropdown_format_name + ')\n';
    return code;
  };
/*************************************************/

/************* tallysexdata ****************************/
Blockly.Blocks['tallysexdata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(")
          .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_2")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Select two categorical variables and a dataset to make a two-way table");
   this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
    }
  };

  Blockly.JavaScript['tallysexdata'] = function(block) {
    var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
    var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'tally(' + dropdown_categorical_var1_name + '~' + dropdown_categorical_var2_name + ', data =' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/************* tallysexdata2 ****************************/
/* comment it out also from the infrastructure side */
Blockly.Blocks['tallysexdata2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(~")
          .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
          .appendField("+")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_2")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
  this.setTooltip("");
  this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
    }
  };

  Blockly.JavaScript['tallysexdata2'] = function(block) {
    var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
    var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'tally(~' + dropdown_categorical_var1_name + '+' + dropdown_categorical_var2_name + ', data =' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/************* tallysexformatdata ****************************/
Blockly.Blocks['tallysexformatdata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("tally(~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_1")
          .appendField("|")
          .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_2")
          .appendField(", format =")
          .appendField(new Blockly.FieldDropdown([["\"proportion\"","\"proportion\""],["\"percentage\"","\"percentage\""]]), "format")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Select two categorical variables, a format and a dataset to make a conditional two-way table");
   this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
    }
  };

  Blockly.JavaScript['tallysexformatdata'] = function(block) {
    var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
    var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
    var dropdown_format_name = block.getFieldValue('format');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'tally(~' + dropdown_categorical_var1_name + '|' + dropdown_categorical_var2_name + ', format = ' + dropdown_format_name +', data =' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/************ define favstatsdata **********************/
Blockly.Blocks['favstatsdata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("favstats(")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Choose a quantitative variable and a dataset to get the numerical summary");
   this.setHelpUrl("https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats");
    }
  };

  Blockly.JavaScript['favstatsdata'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'favstats(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/************ define favstatssubstancedata **********************/
Blockly.Blocks['favstatssubstancedata'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("favstats(")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField("|")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group ");
   this.setHelpUrl("https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats");
    }
  };

  Blockly.JavaScript['favstatssubstancedata'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'favstats(~' + dropdown_quantitative_var_name + '|' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/************ define favstatssubstancedata2 **********************/
Blockly.Blocks['favstatssubstancedata2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("favstats(")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group (same as favstats above)");
   this.setHelpUrl("https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats");
    }
  };

  Blockly.JavaScript['favstatssubstancedata2'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'favstats(' + dropdown_quantitative_var_name + '~' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/********************** define cor *********************/
Blockly.Blocks['cor'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("cor(")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), "quantitative_variable_2")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Choose two quantitative variables and a dataset to get the correlation between these two variables");
   this.setHelpUrl("https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/cor");
    }
  };

  Blockly.JavaScript['cor'] = function(block) {
    var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
    var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'cor(' + dropdown_quantitative_var1_name + '~' + dropdown_quantitative_var2_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/*************************************************
 *           STATISTICAL ANALYSIS                *
 ************************************************/

/*************** define tallydata ********************/

Blockly.Blocks['Gtallydata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tally(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Choose a categorical variable and a dataset to get a contingence table");
 this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
  }
};

Blockly.JavaScript['Gtallydata'] = function(block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tally(~' + dropdown_categorical_var_name + ', data =' + dropdown_data_name + ')\n';
  return code;
};

/*************************************************/

/********** define tallydataformat ***************/
Blockly.Blocks['Gtallydataformat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tally(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(", format =")
        .appendField(new Blockly.FieldTextInput(""), "format")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Choose a categorical variable, a dataset and a format  to get a contingence table");
 this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
  }
};

Blockly.JavaScript['Gtallydataformat'] = function(block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_format_name = block.getFieldValue('format');
  var code = 'tally(~' + dropdown_categorical_var_name + ', data =' + dropdown_data_name + ', format = ' + dropdown_format_name + ')\n';
  return code;
};
/*************************************************/

/************* tallysexdata ****************************/
Blockly.Blocks['Gtallysexdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tally(")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Select two categorical variables and a dataset to make a two-way table");
 this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
  }
};

Blockly.JavaScript['Gtallysexdata'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tally(' + dropdown_categorical_var1_name + '~' + dropdown_categorical_var2_name + ', data =' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************* tallysexdata2 ****************************/
/* comment it out also from the infrastructure side */
Blockly.Blocks['Gtallysexdata2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tally(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField("+")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
  }
};

Blockly.JavaScript['Gtallysexdata2'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tally(~' + dropdown_categorical_var1_name + '+' + dropdown_categorical_var2_name + ', data =' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************* tallysexformatdata ****************************/
Blockly.Blocks['Gtallysexformatdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tally(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField("|")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", format =")
        .appendField(new Blockly.FieldTextInput(""), "format")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Select two categorical variables, a format and a dataset to make a conditional two-way table");
 this.setHelpUrl("https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally");
  }
};

Blockly.JavaScript['Gtallysexformatdata'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_format_name = block.getFieldValue('format');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tally(~' + dropdown_categorical_var1_name + '|' + dropdown_categorical_var2_name + ', format = ' + dropdown_format_name +', data =' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************ define favstatsdata **********************/
Blockly.Blocks['Gfavstatsdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("favstats(")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Choose a quantitative variable and a dataset to get the numerical summary");
 this.setHelpUrl("https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats");
  }
};

Blockly.JavaScript['Gfavstatsdata'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'favstats(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************ define favstatssubstancedata **********************/
Blockly.Blocks['Gfavstatssubstancedata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("favstats(")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField("|")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group");
 this.setHelpUrl("https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats");
  }
};

Blockly.JavaScript['Gfavstatssubstancedata'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'favstats(~' + dropdown_quantitative_var_name + '|' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************ define favstatssubstancedata2 **********************/
Blockly.Blocks['Gfavstatssubstancedata2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("favstats(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Choose a quantitative variable, a categorical/grouping variable and a dataset to get the numerical summary for each group (same as favstats above)");
 this.setHelpUrl("https://www.rdocumentation.org/packages/mosaic/versions/0.5-1/topics/favstats");
  }
};

Blockly.JavaScript['Gfavstatssubstancedata2'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'favstats(' + dropdown_quantitative_var_name + '~' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/********************** define cor *********************/
Blockly.Blocks['Gcor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cor(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_2")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Choose two quantitative variables and a dataset to get the correlation between these two variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/cor");
  }
};

Blockly.JavaScript['Gcor'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'cor(' + dropdown_quantitative_var1_name + '~' + dropdown_quantitative_var2_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/


/*************************************************
 *    DATA VISUALIZATION (using HELPrct)         *
 ************************************************/

/******************* define gf_bar  *********************/
Blockly.Blocks['gf_bar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_bar(~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_1")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("bar chart for one categorical variable");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
    }
  };

  Blockly.JavaScript['gf_bar'] = function(block) {
    var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
    var dropdown_data_name = block.getFieldValue('data');
    //var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
    var code = 'gf_bar(~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/**************** define pie ***************************/
Blockly.Blocks['pie'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pie(tally(~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField("))");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("pie chart for one categorical variable");
   this.setHelpUrl("https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/pie");
    }
  };

  Blockly.JavaScript['pie'] = function(block) {
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'pie(tally(~' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + '))\n';
    return code;
  };
/*******************************************************/

/****************** define gf_counts ******************/
Blockly.Blocks['gf_counts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_counts(~")
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
        .appendField(", fill = ~")
        .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_2")
        .appendField(", position = ")
        .appendField(new Blockly.FieldDropdown([["position_dodge()","position_dodge()"],["\"fill\"","\"fill\""]]), "position")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("side-by-side bar chart for 2 categorical variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['gf_counts'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_position_name = block.getFieldValue('position');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_counts(~' + dropdown_categorical_var1_name + ', fill = ~' + dropdown_categorical_var2_name + ', position = ' + dropdown_position_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/* add gf_percents */
/****************** define gf_percents ******************/
Blockly.Blocks['gf_percents'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_percents(~")
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
        .appendField(", fill = ~")
        .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_2")
        .appendField(", position = ")
        .appendField(new Blockly.FieldDropdown([["\"fill\"","\"fill\""],["position_dodge()","position_dodge()"]]), "position")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("segmented bar chart for 2 categorical variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['gf_percents'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_position_name = block.getFieldValue('position');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_counts(~' + dropdown_categorical_var1_name + ', fill = ~' + dropdown_categorical_var2_name + ', position = ' + dropdown_position_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************** define mosaicplot ******************************/
Blockly.Blocks['mosaicplot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mosaicplot(")
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
        .appendField("~")
        .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_2")
        .appendField(", color = ")
        .appendField(new Blockly.FieldDropdown([["TRUE","TRUE"],["FALSE","FALSE"]]), "boolean")
        .appendField(", data =")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("mosaic plot for 2 categorical variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/mosaicplot");
  }
};

Blockly.JavaScript['mosaicplot'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_boolean = block.getFieldValue('boolean');
  var dropdown_data_name = block.getFieldValue('data');
  
  var code = 'mosaicplot(' + dropdown_categorical_var1_name + '~' + dropdown_categorical_var2_name + ', color = ' + dropdown_boolean + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************************/

/****************** define gf_boxplot ******************/
Blockly.Blocks['gf_boxplot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_boxplot(~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField(", data = ")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("box plot for one quantitative variable");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot");
    }
  };

  Blockly.JavaScript['gf_boxplot'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'gf_boxplot(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/************** define gf_boxplot_substance ******************************/
Blockly.Blocks['gf_boxplot_substance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_boxplot(")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("box plot by groups");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot");
    }
  };

  Blockly.JavaScript['gf_boxplot_substance'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'gf_boxplot(' + dropdown_quantitative_var_name + '~' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*************************************************************************/

/****************** define gf_histogram ******************/
Blockly.Blocks['gf_histogram'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_histogram(~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField(", data = ")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(", bins = ")
          .appendField(new Blockly.FieldDropdown([["5","5"],["10","10"],["15","15"],["20","20"]]), "bins")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("histogram for one quantitative variable");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram");
    }
  };

  Blockly.JavaScript['gf_histogram'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var dropdown_bins_number = block.getFieldValue('bins');
    var code = 'gf_histogram(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ', bins = ' + dropdown_bins_number + ')\n';
    return code;
  };
/*******************************************************/

/************** define gf_histogram_substance ******************************/
Blockly.Blocks['gf_histogram_substance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_histogram(~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField("|")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", bins =")
          .appendField(new Blockly.FieldDropdown([["5","5"],["10","10"],["15","15"],["20","20"]]), "bins")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("histogram by groups");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram");
    }
  };

  Blockly.JavaScript['gf_histogram_substance'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_bins_number = block.getFieldValue('bins');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'gf_histogram(~' + dropdown_quantitative_var_name + '|' + dropdown_categorical_var_name + ', bins = ' + dropdown_bins_number + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*************************************************************************/

/****************** define gf_dens ******************/
Blockly.Blocks['gf_dens'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_dens(~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("density plot for one quantitative variable");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density");
    }
  };

  Blockly.JavaScript['gf_dens'] = function(block) {
    var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'gf_dens(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/

/****************** define gf_dens_color ******************/
Blockly.Blocks['gf_dens_color'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_dens(~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
          .appendField(", color = ~")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("colored density plot for on quantitative variable");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density");
    }
  };

  Blockly.JavaScript['gf_dens_color'] = function(block) {
    var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
    var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'gf_dens(~' + dropdown_quantitative_var1_name + ', color = ~ ' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*******************************************************/



/************** define gf_point ******************************/
Blockly.Blocks['gf_point'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_point(")
          .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
          .appendField("~")
          .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), "quantitative_variable_2")
          .appendField(", color = ~")
          .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable")
          .appendField(", data =")
          .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("overlaid density plots");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_point");
    }
  };

  Blockly.JavaScript['gf_point'] = function(block) {
    var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
    var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
    var color = block.getFieldValue('categorical_variable');
    var dropdown_data_name = block.getFieldValue('data');
    var code = 'gf_point(' + dropdown_quantitative_var1_name + '~' + dropdown_quantitative_var2_name + ', color = ~' + color + ', data = ' + dropdown_data_name + ')\n';
    return code;
  };
/*************************************************************************/




/*************************************************
 *            DATA VISUALIZATION                 *
 ************************************************/

/******************* define gf_bar  *********************/
Blockly.Blocks['Ggf_bar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_bar(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("bar chart for one categorical variable");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Ggf_bar'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  //var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var code = 'gf_bar(~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/**************** define pie ***************************/
Blockly.Blocks['Gpie'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pie(tally(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField("))");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("pie chart for one categorical variable");
 this.setHelpUrl("https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/pie");
  }
};

Blockly.JavaScript['Gpie'] = function(block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'pie(tally(~' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + '))\n';
  return code;
};
/*******************************************************/

/****************** define gf_counts ******************/
Blockly.Blocks['Ggf_counts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_counts(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField(", fill = ~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", position = ")
        .appendField(new Blockly.FieldTextInput(""), "position")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("side-by-side bar chart for two categorical variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Ggf_counts'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_position_name = block.getFieldValue('position');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_counts(~' + dropdown_categorical_var1_name + ', fill = ~' + dropdown_categorical_var2_name + ', position = ' + dropdown_position_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/****************** define gf_percents ******************/
Blockly.Blocks['Ggf_percents'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_percents(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField(", fill = ~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", position = ")
        .appendField(new Blockly.FieldTextInput(""), "position")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("segmented bar chart for two categorical variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Ggf_percents'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_position_name = block.getFieldValue('position');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_counts(~' + dropdown_categorical_var1_name + ', fill = ~' + dropdown_categorical_var2_name + ', position = ' + dropdown_position_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************** define mosaicplot ******************************/
Blockly.Blocks['Gmosaicplot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mosaicplot(")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", color = ")
        .appendField(new Blockly.FieldTextInput(""), "boolean")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("mosaic plot for two categorical variables");
 this.setHelpUrl("https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/mosaicplot");
  }
};

Blockly.JavaScript['Gmosaicplot'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_boolean = block.getFieldValue('boolean');
  var dropdown_data_name = block.getFieldValue('data');
  
  var code = 'mosaicplot(' + dropdown_categorical_var1_name + '~' + dropdown_categorical_var2_name + ', color = ' + dropdown_boolean + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************************/

/****************** define gf_boxplot ******************/
Blockly.Blocks['Ggf_boxplot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_boxplot(~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("box plot for one quantitative variable");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot");
  }
};

Blockly.JavaScript['Ggf_boxplot'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_boxplot(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/************** define gf_boxplot_substance ******************************/
Blockly.Blocks['Ggf_boxplot_substance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_boxplot(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("box plot by groups");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot");
  }
};

Blockly.JavaScript['Ggf_boxplot_substance'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_boxplot(' + dropdown_quantitative_var_name + '~' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************************/

/****************** define gf_histogram ******************/
Blockly.Blocks['Ggf_histogram'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_histogram(~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(", bins = ")
        .appendField(new Blockly.FieldTextInput(""), "bins")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("histogram for one quantitative variable");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram");
  }
};

Blockly.JavaScript['Ggf_histogram'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_bins_number = block.getFieldValue('bins');
  var code = 'gf_histogram(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ', bins = ' + dropdown_bins_number + ')\n';
  return code;
};
/*******************************************************/

/************** define gf_histogram_substance ******************************/
Blockly.Blocks['Ggf_histogram_substance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_histogram(~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField("|")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", bins =")
        .appendField(new Blockly.FieldTextInput(""), "bins")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("histogram by groups");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram");
  }
};

Blockly.JavaScript['Ggf_histogram_substance'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_bins_number = block.getFieldValue('bins');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_histogram(~' + dropdown_quantitative_var_name + '|' + dropdown_categorical_var_name + ', bins = ' + dropdown_bins_number + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************************/

/****************** define gf_dens ******************/
Blockly.Blocks['Ggf_dens'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_dens(~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("density plot for one quantitative variable");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density");
  }
};

Blockly.JavaScript['Ggf_dens'] = function(block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_dens(~' + dropdown_quantitative_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/

/****************** define gf_dens_color ******************/
Blockly.Blocks['Ggf_dens_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_dens(~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField(", color = ~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("colored density plor for one quantitative variable");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density");
  }
};

Blockly.JavaScript['Ggf_dens_color'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_dens(~' + dropdown_quantitative_var1_name + ', color = ~ ' + dropdown_categorical_var_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*******************************************************/



/************** define gf_point ******************************/
Blockly.Blocks['Ggf_point'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gf_point(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField("~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_2")
        .appendField(", color = ~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable")
        .appendField(", data =")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("overlaid density plots");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_point");
  }
};

Blockly.JavaScript['Ggf_point'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var color = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'gf_point(' + dropdown_quantitative_var1_name + '~' + dropdown_quantitative_var2_name + ', color = ~' + color + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************************/

/*************************************************
 *  STATISTICAL INFERENCE (using HELPrct)        *
 ************************************************/

/************** define prop.test ******************************/
Blockly.Blocks['proptest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prop.test(~")
        .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(", alternative = ")
        .appendField(new Blockly.FieldDropdown([["\"greater\"","\"greater\""],["\"two.sided\"","\"two.sided\""],["\"less\"","\"less\""]]), "alternative")
        .appendField(", success = ")
        .appendField(new Blockly.FieldTextInput("\"yes\""), "success")
        .appendField(", p = ")
        .appendField(new Blockly.FieldTextInput("0.7"), "p")
        .appendField(", conf.level = ")
        .appendField(new Blockly.FieldDropdown([["0.95","0.95"],["0.90","0.90"],["0.99","0.99"],["0.98","0.98"]]), "conf.level")
        .appendField(", correct = ")
        .appendField(new Blockly.FieldDropdown([["FALSE","FALSE"],["TRUE","TRUE"]]), "correct")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("one-proportion z-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['proptest'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var success_name = block.getFieldValue('success');
  var p_name = block.getFieldValue('p');
  var dropdown_conflevel = block.getFieldValue('conf.level');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code = 'prop.test(~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ', alternative = ' + dropdown_alternative_name + ', success = ' + success_name + ', p = ' + p_name + ', conf.level = ' + dropdown_conflevel + ', correct = ' + dropdown_correct_name + ')\n';
  return code;
};
/*************************************************************/

/*********** define prop.test2 ******************************/
Blockly.Blocks['proptest2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prop.test(~")
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt_homelessfirst), "categorical_variable_1")
        .appendField("|")
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_2")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(", correct = ")
        .appendField(new Blockly.FieldDropdown([["FALSE","FALSE"],["TRUE","TRUE"]]), "correct")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("two-proportion z-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['proptest2'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code = 'prop.test(~' + dropdown_categorical_var1_name + '|' + dropdown_categorical_var2_name + ', data = ' + dropdown_data_name + ', correct = ' + dropdown_correct_name + ')\n';
  return code;
};
/*************************************************************/

/************** define t.test ******************************/
Blockly.Blocks['ttest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("t.test(~")
        .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(", alternative = ")
        .appendField(new Blockly.FieldDropdown([["\"greater\"","\"greater\""],["\"two.sided\"","\"two.sided\""],["\"less\"","\"less\""]]), "alternative")
        .appendField(", mu = ")
        .appendField(new Blockly.FieldTextInput("30"), "mu")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("one-sample t-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['ttest'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var mu_name = block.getFieldValue('mu');
  var code = 't.test(~' + dropdown_quantitative_var1_name + ', data = ' + dropdown_data_name + ', alternative = ' + dropdown_alternative_name + ', mu = ' + mu_name + ')\n';
  return code;
};
/*************************************************************/

/************** define t.test2 ******************************/
Blockly.Blocks['ttest2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("t.test(")
        .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("two-sample t-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['ttest2'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 't.test(' + dropdown_quantitative_var1_name + '~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************/

/************** define xchisq.test ******************************/
Blockly.Blocks['xchisqtest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("xchisq.test(")
        .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_2")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField(", correct = ")
        .appendField(new Blockly.FieldDropdown([["FALSE","FALSE"],["TRUE","TRUE"]]), "correct")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("chi squared test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['xchisqtest'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code = 'xchisq.test(' + dropdown_categorical_var1_name + '~' + dropdown_categorical_var2_name + ', data = ' + dropdown_data_name + ', correct = ' + dropdown_correct_name + ')\n';
  return code;
};
/*************************************************************/

/************** define anova ******************************/
Blockly.Blocks['anova'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("anova(lm(")
        .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField("))");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("one way anova test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['anova'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'anova(lm(' + dropdown_quantitative_var1_name + '~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + '))\n';
  return code;
};
/*************************************************************/

/************** define summary (SLR) ******************************/
Blockly.Blocks['slrsummary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("summary(lm(")
        .appendField(new Blockly.FieldDropdown(quantitative_vars), "quantitative_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), "quantitative_variable_2")
        .appendField(", data = ")
        .appendField(new Blockly.FieldDropdown([["HELPrct","HELPrct"]]), "data")
        .appendField("))");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("simple linear regression");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['slrsummary'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'summary(lm(' + dropdown_quantitative_var1_name + '~' + dropdown_quantitative_var2_name + ', data = ' + dropdown_data_name + '))\n';
  return code;
};
/*************************************************************/

/*************************************************
 *           STATISTICAL INFERENCE               *
 ************************************************/

/************** define prop.test ******************************/
Blockly.Blocks['Gproptest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prop.test(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(", alternative = ")
        .appendField(new Blockly.FieldTextInput(""), "alternative")
        .appendField(", success = ")
        .appendField(new Blockly.FieldTextInput(""), "success")
        .appendField(", p = ")
        .appendField(new Blockly.FieldTextInput(""), "p")
        .appendField(", conf.level = ")
        .appendField(new Blockly.FieldTextInput(""), "conf.level")
        .appendField(", correct = ")
        .appendField(new Blockly.FieldTextInput(""), "correct")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("one-proportion z-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Gproptest'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var success_name = block.getFieldValue('success');
  var p_name = block.getFieldValue('p');
  var dropdown_conflevel = block.getFieldValue('conf.level');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code = 'prop.test(~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ', alternative = ' + dropdown_alternative_name + ', success = ' + success_name + ', p = ' + p_name + ', conf.level = ' + dropdown_conflevel + ', correct = ' + dropdown_correct_name + ')\n';
  return code;
};
/*************************************************************/

/*********** define prop.test2 ******************************/
Blockly.Blocks['Gproptest2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prop.test(~")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField("|")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(", correct = ")
        .appendField(new Blockly.FieldTextInput(""), "correct")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("two-proportion z-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Gproptest2'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code = 'prop.test(~' + dropdown_categorical_var1_name + '|' + dropdown_categorical_var2_name + ', data = ' + dropdown_data_name + ', correct = ' + dropdown_correct_name + ')\n';
  return code;
};
/*************************************************************/

/************** define t.test ******************************/
Blockly.Blocks['Gttest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("t.test(~")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(", alternative = ")
        .appendField(new Blockly.FieldTextInput(""), "alternative")
        .appendField(", mu = ")
        .appendField(new Blockly.FieldTextInput(""), "mu")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("one-sample t-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Gttest'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_alternative_name = block.getFieldValue('alternative');
  var mu_name = block.getFieldValue('mu');
  var code = 't.test(~' + dropdown_quantitative_var1_name + ', data = ' + dropdown_data_name + ', alternative = ' + dropdown_alternative_name + ', mu = ' + mu_name + ')\n';
  return code;
};
/*************************************************************/

/************** define t.test2 ******************************/
Blockly.Blocks['Gttest2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("t.test(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("two-sample t-test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Gttest2'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 't.test(' + dropdown_quantitative_var1_name + '~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + ')\n';
  return code;
};
/*************************************************************/

/************** define xchisq.test ******************************/
Blockly.Blocks['Gxchisqtest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("xchisq.test(")
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_2")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField(", correct = ")
        .appendField(new Blockly.FieldTextInput(""), "correct")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("chi squared test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Gxchisqtest'] = function(block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_correct_name = block.getFieldValue('correct');
  var code = 'xchisq.test(' + dropdown_categorical_var1_name + '~' + dropdown_categorical_var2_name + ', data = ' + dropdown_data_name + ', correct = ' + dropdown_correct_name + ')\n';
  return code;
};
/*************************************************************/

/************** define anova ******************************/
Blockly.Blocks['Ganova'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("anova(lm(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldTextInput(""), "categorical_variable_1")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField("))");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("one way anova test");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Ganova'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'anova(lm(' + dropdown_quantitative_var1_name + '~' + dropdown_categorical_var1_name + ', data = ' + dropdown_data_name + '))\n';
  return code;
};
/*************************************************************/

/************** define summary (SLR) ******************************/
Blockly.Blocks['Gslrsummary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("summary(lm(")
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_1")
        .appendField('~')
        .appendField(new Blockly.FieldTextInput(""), "quantitative_variable_2")
        .appendField(", data = ")
        .appendField(new Blockly.FieldTextInput(""), "data")
        .appendField("))");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#039be5");
 this.setTooltip("simple linear regression");
 this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
  }
};

Blockly.JavaScript['Gslrsummary'] = function(block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'summary(lm(' + dropdown_quantitative_var1_name + '~' + dropdown_quantitative_var2_name + ', data = ' + dropdown_data_name + '))\n';
  return code;
};
/*************************************************************/

