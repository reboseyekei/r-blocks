import Blockly from 'blockly';
import 'blockly/javascript';

const categorical_vars = [["substance","substance"],["anysub","anysub"], ["sex","sex"],["homeless","homeless"],["link","link"],["racegrp","racegrp"],["satreat","satreat"],["treat","treat"]]
const categorical_vars_alt = [["sex","sex"],["substance","substance"],["anysub","anysub"],["homeless","homeless"],["link","link"],["racegrp","racegrp"],["satreat","satreat"],["treat","treat"]]
const quantitative_vars = [["cesd","cesd"],["mcs","mcs"], ["pcs","pcs"],["age","age"],["d1","d1"],["pcs_fr","pcs_fr"],["hospitalizations","hospitalizations"],["sexrisk","sexrisk"],["daysanysub","daysanysub"],["dayslink","dayslink"],["drugrisk","drugrisk"],["e2b","e2b"],["i1","i1"],["i2","i2"],["indtotal","indtotal"]]
const quantitative_vars_alt = [["mcs","mcs"],["cesd","cesd"], ["pcs","pcs"],["age","age"],["d1","d1"],["pcs_fr","pcs_fr"],["hospitalizations","hospitalizations"],["sexrisk","sexrisk"],["daysanysub","daysanysub"],["dayslink","dayslink"],["drugrisk","drugrisk"],["e2b","e2b"],["i1","i1"],["i2","i2"],["indtotal","indtotal"]]

/*************************************************
 *           LIBRARY FUNCTIONALITY               *
 ************************************************/

/**** Library (lib) Function *****/
Blockly.Blocks['lib'] = {
  init: function() {
    this.appendDummyInput("library")
        .appendField("library(")
        .appendField(new Blockly.FieldDropdown([["mosaic","mosaic"]/*, ["option","OPTIONNAME"], ["option","OPTIONNAME"]*/]), "library_name")
        .appendField(")");
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
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

/**** Library (req) Function *****/
Blockly.Blocks['req'] = {
    init: function() {
      this.appendDummyInput("library")
          .appendField("require(")
          .appendField(new Blockly.FieldDropdown([["mosaic","mosaic"]/*, ["option","OPTIONNAME"], ["option","OPTIONNAME"]*/]), "library_name")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("Checks if the library is loaded already (returns TRUE/FALSE)");
   this.setHelpUrl("https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library");
    }
  };

Blockly.JavaScript['req'] = function(block) {
  var dropdown_library_name = block.getFieldValue('library_name');
  var code = 'require(' + dropdown_library_name + ')\n';
  return code;
};
/***********************************/

/*************************************************
 *           STATISTICAL ANALYSIS                *
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
   this.setTooltip("Used to tally a categorical variable for specific dataset");
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
          .appendField(new Blockly.FieldDropdown([["\"proportion\"","\"proportion\""],["\"percentage\"","\"percentage\""]]), "format")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Used to tally a categorical variable for specific dataset in proportions/percentages format");
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
   this.setTooltip("");
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
          .appendField(new Blockly.FieldDropdown(categorical_vars_alt), "categorical_variable_1")
          .appendField("|")
          .appendField(new Blockly.FieldDropdown(categorical_vars), "categorical_variable_2")
          .appendField(", format =")
          .appendField(new Blockly.FieldDropdown([["\"proportion\"","\"proportion\""],["\"percentage\"","\"percentage\""]]), "format")
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
   this.setTooltip("");
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
   this.setTooltip("");
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
   this.setTooltip("");
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
   this.setTooltip("");
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
 *           DATA VISUALIZATION                  *
 ************************************************/

/******************* define gf_bar  *********************/
Blockly.Blocks['gf_bar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_bar(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", fill = ~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance2")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
    }
  };

  Blockly.JavaScript['gf_bar'] = function(block) {
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    var text_substance2 = block.getFieldValue('substance2');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/**************** define pie ***************************/
Blockly.Blocks['pie'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pie( tally(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField("))");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/pie");
    }
  };

  Blockly.JavaScript['pie'] = function(block) {
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_boxplot ******************/
Blockly.Blocks['gf_boxplot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_boxplot(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot");
    }
  };

  Blockly.JavaScript['gf_boxplot'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************** define gf_boxplot_substance ******************************/
Blockly.Blocks['gf_boxplot_substance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_boxplot(")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_boxplot");
    }
  };

  Blockly.JavaScript['gf_boxplot_substance'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/****************** define gf_histogram ******************/
Blockly.Blocks['gf_histogram'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_histogram(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", bins =")
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "bins")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram");
    }
  };

  Blockly.JavaScript['gf_histogram'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    var number_bins = block.getFieldValue('bins');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************** define gf_histogram_substance ******************************/
Blockly.Blocks['gf_histogram_substance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_histogram(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("|")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", bins =")
          .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "bins")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram");
    }
  };

  Blockly.JavaScript['gf_histogram_substance'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var number_bins = block.getFieldValue('bins');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/****************** define gf_dens ******************/
Blockly.Blocks['gf_dens'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_dens(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density");
    }
  };

  Blockly.JavaScript['gf_dens'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_dens_color ******************/
Blockly.Blocks['gf_dens_color'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_dens(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField(", color =")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density");
    }
  };

  Blockly.JavaScript['gf_dens_color'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_helprct = block.getFieldValue('HELPrct');
    var text_sex = block.getFieldValue('sex');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_counts ******************/
Blockly.Blocks['gf_counts'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_counts(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField(", fill =")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", position =")
          .appendField(new Blockly.FieldTextInput("position_dodge()"), "position_dodge()")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
    }
  };

  Blockly.JavaScript['gf_counts'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text_position_dodge__ = block.getFieldValue('position_dodge()');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/****************** define gf_percents ******************/
Blockly.Blocks['gf_percents'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("gf_counts(")
            .appendField("~")
            .appendField(new Blockly.FieldTextInput("sex"), "sex")
            .appendField(", fill =")
            .appendField(new Blockly.FieldTextInput("substance"), "substance")
            .appendField(", position =")
            .appendField(new Blockly.FieldTextInput("\"fill\""), "\"fill\"")
            .appendField(", data =")
            .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
            .appendField(")");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
     this.setTooltip("");
     this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_bar");
      }
  };

  Blockly.JavaScript['gf_percents'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text__fill_ = block.getFieldValue('"fill"');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*******************************************************/

/************** define gf_point ******************************/
Blockly.Blocks['gf_point'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_point(")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("mcs"), "mcs")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_point");
    }
  };

  Blockly.JavaScript['gf_point'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_mcs = block.getFieldValue('mcs');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/************** define gf_qq ******************************/
Blockly.Blocks['gf_qq'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gf_qq(")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("cesd"), "cesd")
          .appendField("|")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(", color = ~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance2")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_qq");
    }
  };

  Blockly.JavaScript['gf_qq'] = function(block) {
    var text_cesd = block.getFieldValue('cesd');
    var text_substance = block.getFieldValue('substance');
    var text_helprct = block.getFieldValue('HELPrct');
    var text_substance2 = block.getFieldValue('substance');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

/************** define mosaicplot ******************************/
Blockly.Blocks['mosaicplot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mosaicplot(")
          .appendField(new Blockly.FieldTextInput("sex"), "sex")
          .appendField("~")
          .appendField(new Blockly.FieldTextInput("substance"), "substance")
          .appendField(", color = ")
          .appendField(new Blockly.FieldTextInput("TRUE"), "TRUE")
          .appendField(", main =")
          .appendField(new Blockly.FieldTextInput("\"Substance vs Sex\""), "\"Substance vs Sex\"")
          .appendField(", data =")
          .appendField(new Blockly.FieldTextInput("HELPrct"), "HELPrct")
          .appendField(")");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/mosaicplot");
    }
  };

  Blockly.JavaScript['mosaicplot'] = function(block) {
    var text_sex = block.getFieldValue('sex');
    var text_substance = block.getFieldValue('substance');
    var text_true = block.getFieldValue('TRUE')
    var text__substance_vs_sex_ = block.getFieldValue('"Substance vs Sex"');
    var text_helprct = block.getFieldValue('HELPrct');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
/*************************************************************************/

